<template>
  <div>
    <p>This is for file tree</p>
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
    background-color: white;
    color: black;
    height: 100%;
    width: 14%;
    display: inline-block;
  }
</style>
