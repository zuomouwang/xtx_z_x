<template>
  <div>
      <Topcom userName="左兴旺"></Topcom>
      <LunBoTu></LunBoTu>

  </div>
</template>

<script>
import LunBoTu from '../components/xxc/LBT/LunBoTu.vue'
import Topcom from '../components/zxw/TopCom.vue'
export default {
  data() {
    return {}
  },
  components: {
    LunBoTu,
    Topcom
  },
  async created() {
    const { data: res } = await this.$http.get('/home/goods', {})
    console.log(res)
  }
}
</script>

<style lang="less" scoped></style>
