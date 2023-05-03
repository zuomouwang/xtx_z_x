<template>
  <div>
    <Topcom :userName="name"></Topcom>
    <HeadeCom :prodata="headdata"></HeadeCom>
    <lun-bo-tu></lun-bo-tu>
    <PaneL></PaneL>
    <footer-com></footer-com>
  </div>
</template>

<script>
import LunBoTu from '../components/xxc/LBT/LunBoTu.vue'
import Topcom from '../components/zxw/TopCom.vue'
import HeadeCom from '../components/zxw/HeaderCom.vue'
import FooterCom from '../components/zxw/FooterCom.vue'
import PaneL from '../components/xxc/panel/PaneL.vue'
import bus from '../eventBus'
export default {
  data() {
    return {
      name: undefined,
      headdata: [],
      PaneLValue: []
    }
  },
  components: {
    LunBoTu,
    Topcom,
    HeadeCom,
    FooterCom,
    PaneL
  },
  created() {
    this.$http.get('/home/category/head', {}).then(value => {
      const { data: res } = value
      this.headdata = res.result
      return res.result
    }),
      this.$http.get('/home/index').then(value => {
        bus.emit('getIndex', value)
      })
  }
}
</script>

<style lang="less" scoped></style>
