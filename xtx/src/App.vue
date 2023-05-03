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
}
</style>
