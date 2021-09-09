<template>
  <div id="app">
    <svg-icon icon-class="404" />

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // vue-meta https://www.lqzww.top/posts/6660d73a/
  metaInfo: {
    title: "首页",
    titleTemplate: "%s | xxxx"
  },
  mounted() {}
};
</script>


<style lang="scss">
</style>
