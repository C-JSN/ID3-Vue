<template>
  <div>
    <live-render></live-render>
    <editor></editor>
  </div>
</template>

<script>
  import Tabs from './CenterPanel/Tabs';
  import Editor from './CenterPanel/Editor';
  import LiveRender from './CenterPanel/LiveRender';
  export default {
    components: {
      Tabs,
      Editor,
      LiveRender,
    },
  }
</script>

<style scoped>
  div {
    width: 50%;
    height: 100%;
    display: inline-block;
  }
</style>
