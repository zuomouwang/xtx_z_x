<template>
  <div>
    <Topcom :userName="name"></Topcom>
    <HeadeCom :prodata="headdata"></HeadeCom>
    <lun-bo-tu></lun-bo-tu>
    <PaneL></PaneL>
    <HoT></HoT>
    <ReMen></ReMen>
    <footer-com></footer-com>
  </div>
</template>

<script>
import LunBoTu from '../components/xxc/LBT/LunBoTu.vue'
import Topcom from '../components/zxw/TopCom.vue'
import HeadeCom from '../components/zxw/HeaderCom.vue'
import FooterCom from '../components/zxw/FooterCom.vue'
import PaneL from '../components/xxc/panel/PaneL.vue'
import HoT from '../components/xxc/Hot/HoT.vue'
import ReMen from '../components/xxc/Remen/ReMen.vue'
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
    PaneL,
    HoT,
    ReMen
  },
  created() {
    this.$http.get('/home/category/head', {}).then(value => {
      const { data: res } = value
      this.headdata = res.result
      return res.result
    });
      this.$http.get('/home/index').then(value => {
        // console.log(value)
        bus.emit('getIndex', value)
      });
      this.$http.get('/home/hot').then(value => {
        // console.log(value)
        bus.emit('getHot', value)
      });
    this.$http.get('/home/brand').then(value => {
      // console.log(value)
      bus.emit('getReMen', value)
    })
  }
}
</script>

<style lang="less" scoped></style>
