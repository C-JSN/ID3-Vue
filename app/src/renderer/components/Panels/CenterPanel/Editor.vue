<template>
  <div>
    <p>This is for the Editor</p>
  </div>
</template>

<script>
  export default {
    created () {
      // Set $route values that are not preset during unit testing
      if (process.env.NODE_ENV === 'testing') {
        this.$route = {
          name: 'landing-page',
          path: '/landing-page'
        }
      }
    }
  }
</script>

<style scoped>
  div {
    height: 50%;
    background-color: purple;
  }
</style>
