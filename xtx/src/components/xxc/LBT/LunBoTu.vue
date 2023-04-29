<template>
  <div class="LBT-container">
    <div class="wrapper">
      <TuTu></TuTu>
    </div>
  </div>
</template>

<script>
import TuTu from './lunbotu/TuTu.vue'

export default {
  components: { TuTu },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.LBT-container {
  height: 500px;
  background-color: #f5f5f5;
}
</style>
