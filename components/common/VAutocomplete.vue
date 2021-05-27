<template>
  <div v-click-outside="selectedHandler" class="v-autocomplete">
    <label :for="`input-${_uid}`" class="v-autocomplete-input">
      <img
        src="@/static/Vector.svg"
        alt="search"
        class="v-autocomplete-input__icon"
      />
      <input
        :id="`input-${_uid}`"
        v-model="currentValue"
        type="text"
        class="v-autocomplete-input__textfield"
        :placeholder="placeholder"
        autocomplete="off"
        @input="inputHandler"
      />
    </label>
    <v-autocomplete-spinner v-if="loading" />
    <v-autocomplete-dropdown
      v-if="users.length && !loading"
      :users="users"
      @selected="selectedHandler"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      users: [],
      currentValue: '',
      loading: false
    }
  },
  created() {
    this.currentValue = this.value
  },
  methods: {
    async inputHandler() {
      this.loading = true

      try {
        const { data: users } = await this.$http({
          url: '/users',
          method: 'GET'
        })
        const { data: images } = await this.$http({
          url: '/photos',
          method: 'GET',
          params: {
            _start: 0,
            _limit: 10
          }
        })

        this.users = users
          .map((user, index) => {
            const image = images.find((image) => image.id === user.id)
            return {
              id: user.id,
              name: user.name,
              username: user.username,
              href: user.website,
              image: {
                title: image.title,
                url: image.thumbnailUrl
              }
            }
          })
          .filter((user) => {
            const name = user.name.toLowerCase()
            const value = this.currentValue.toLowerCase()
            if (name.includes(value)) return true
            else return false
          })

        this.loading = false
      } catch {
        console.log('HTTP ERROR')
      }
    },
    selectedHandler(id) {
      const user = this.users.find((user) => user.id === id)?.name
      this.currentValue = user
      this.$emit('input', user)
      this.users = []
    }
  }
}
</script>

<style lang="scss" scoped>
.v-autocomplete {
  background-color: #fff;
  border-radius: 0px 0px 8px 8px;
  width: 343px;
  // .v-autocomplete-input
  &-input {
    display: flex;
    align-items: center;
    padding: 0 19px;
    height: 56px;
    border-radius: 6px 6px 0 0;
    border-bottom: solid 1px #262626;
    background-color: #fff;
    cursor: text;
    // .v-autocomplete-input__textfield
    &__textfield {
      width: 100%;
      margin-left: 19px;
      font-size: 16px;
      line-height: 22px;
      border: none;
      outline: none;
    }
  }
}
</style>
