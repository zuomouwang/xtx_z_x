<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  mounted() {
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify([]))
    }
    if (!localStorage.getItem('account')) {
      localStorage.setItem('account', JSON.stringify([]))
    }
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
