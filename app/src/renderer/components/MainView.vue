<template>
  <div>
    <file-tree></file-tree>
    <center-panel></center-panel>
    <attribute-panel></attribute-panel>
  </div>
</template>

<script>
  import FileTree from './Panels/LeftPanel/FileTree'
  import CenterPanel from './Panels/CenterPanel'
  import AttributePanel from './Panels/RightPanel/AttributePanel'
  export default {
    components: {
      FileTree,
      CenterPanel,
      AttributePanel,
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
