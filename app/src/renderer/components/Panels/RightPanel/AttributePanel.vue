<template>
  <div>
    <p>This is for the Attribute Panel</p>
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
    width: 20%;
    /*height: 100%;*/
    background-color: green;
    display:inline-block;
  }
</style>
