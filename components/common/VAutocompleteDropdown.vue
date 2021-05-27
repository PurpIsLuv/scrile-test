<template>
  <div class="v-autocomplete-dropdown">
    <ol>
      <v-autocomplete-dropdown-item
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :username="user.username"
        :src="user.image.url"
        :alt="user.image.title"
        @click="$emit('selected', user.id)"
      />
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.v-autocomplete-dropdown {
  max-height: 343px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    list-style-type: none;
  }
}
</style>
