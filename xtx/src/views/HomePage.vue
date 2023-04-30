<template>
  <div>
    <Topcom userName="左兴旺"></Topcom>
    <HeadeCom :data="headdata"></HeadeCom>
    <LunBoTu></LunBoTu>
  </div>
</template>

<script>
import LunBoTu from '../components/xxc/LBT/LunBoTu.vue'
import Topcom from '../components/zxw/TopCom.vue'
import HeadeCom from '../components/zxw/HeaderCom.vue'
import bus from '../eventBus'
export default {
  data() {
    return {
      headdata: {}
    }
  },
  components: {
    LunBoTu,
    Topcom,
    HeadeCom
  },
  created() {
    this.$http.get('/home/category/head', {}).then(value => {
      const { data: res } = value
      bus.emit('getValue', res.result)
      this.headdata = res.result
      return res.result
    })
  }
}
</script>

<style lang="less" scoped></style>
