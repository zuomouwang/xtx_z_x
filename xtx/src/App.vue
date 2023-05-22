<template>
  <HomePage></HomePage>
</template>

<script>
import HomePage from './views/HomePage.vue'
export default {
  data() {
    return {}
  },
  components: {
    HomePage
  }
}
</script>

<style lang="less">
:root {
  --lv: #27ba9b;
  --hui: #f5f5f5;
}
.wrapper {
  margin: 0 auto;
  width: 1240px;
  font: 1em/1.4 Microsoft Yahei, PingFang SC, Avenir, Segoe UI, Hiragino Sans GB, STHeiti, 'Microsoft Sans Serif',
    WenQuanYi Micro Hei, sans-serif;
}
</style>
