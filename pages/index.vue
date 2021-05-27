<template>
  <div class="container">
    <v-autocomplete v-model="user" class="autocomplete" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: undefined
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.autocomplete {
  margin: 200px auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
