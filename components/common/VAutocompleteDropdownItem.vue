<template>
  <li class="v-autocomplete-dropdown-item" @click="$emit('click')">
    <img :src="src" :alt="alt" class="v-autocomplete-dropdown-item__avatar" />
    <div class="v-autocomplete-dropdown-item__info">
      <div>{{ name }}</div>
      <div class="v-autocomplete-dropdown-item__link">@{{ username }}</div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    username: {
      type: String,
      default: '',
      required: true
    },
    src: {
      type: String,
      default: '',
      required: true
    },
    alt: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-autocomplete-dropdown-item {
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 8px;
  height: 48px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease;
    background: #f2f2f2;
  }
  &__avatar {
    max-width: 40px;
    max-height: 40px;
    border-radius: 30px;
  }
  &__info {
    margin-left: 8px;
  }
  &__link {
    font-size: 12px;
    line-height: 16px;
    color: #98999a;
  }
}
</style>
