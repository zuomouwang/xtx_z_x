<template>
  <div>
    <Topcom :userName="name"></Topcom>
    <HeadeCom :prodata="headdata"></HeadeCom>
    <LunBoTu></LunBoTu>
    <PaneL></PaneL>
    <HoT></HoT>
    <ReMen></ReMen>
    <ProductCom v-for="i in productdata" :key="i.id" :data="i"></ProductCom>
    <LatestTopic></LatestTopic>
    <footer-com></footer-com>
  </div>
</template>

<script>
import LunBoTu from '../components/xxc/LBT/LunBoTu.vue'
import Topcom from '../components/zxw/TopCom.vue'
import HeadeCom from '../components/zxw/HeaderCom.vue'
import PaneL from '../components/xxc/panel/PaneL.vue'
import HoT from '../components/xxc/Hot/HoT.vue'
import ReMen from '../components/xxc/Remen/ReMen.vue'
import bus from '../eventBus'
import FooterCom from '../components/zxw/FooterCom.vue'
import LatestTopic from '../components/zxw/LatestTopic.vue'
import ProductCom from '../components/zxw/ProductCom.vue'
export default {
  data() {
    return {
      name: undefined,
      headdata: [],
      productdata: [
        { id: 666, goods: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }] },
        { id: 666, goods: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }] },
        { id: 666, goods: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }] },
        { id: 666, goods: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }] }
      ],
      PaneLValue: []
    }
  },
  components: {
    LunBoTu,
    Topcom,
    HeadeCom,
    FooterCom,
    LatestTopic,
    ProductCom,
    PaneL,
    HoT,
    ReMen
  },
  async created() {
    this.$http.get('/home/category/head', {}).then(value => {
      const { data: res } = value
      this.headdata = res.result
      return res.result
    })
    this.$http.get('/home/index').then(value => {
      // console.log(value)
      bus.emit('getIndex', value)
    })
    this.$http.get('/home/hot').then(value => {
      // console.log(value)
      bus.emit('getHot', value)
    })
    this.$http.get('/home/brand').then(value => {
      // console.log(value)
      bus.emit('getReMen', value)
    })
    const { data: res } = await this.$http.get('/home/goods')
    this.productdata = res.result
    console.log(res)
  }
}
</script>

<style lang="less" scoped></style>
