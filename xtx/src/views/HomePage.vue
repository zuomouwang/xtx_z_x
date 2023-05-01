<template>
  <div>
    <Topcom :userName="name"></Topcom>
    <HeadeCom :prodata="headdata"></HeadeCom>
    <LunBoTu></LunBoTu>
    <ProductCom v-for="i in productdata" :key="i.id" :data="i"></ProductCom>
    <LatestTopic></LatestTopic>
    <footer-com></footer-com>
  </div>
</template>

<script>
import LunBoTu from '../components/xxc/LBT/LunBoTu.vue'
import Topcom from '../components/zxw/TopCom.vue'
import HeadeCom from '../components/zxw/HeaderCom.vue'
import bus from '../eventBus'
import FooterCom from '../components/zxw/FooterCom.vue'
import LatestTopic from '../components/zxw/LatestTopic.vue'
import ProductCom from '../components/zxw/ProductCom.vue'
export default {
  data() {
    return {
      name: undefined,
      headdata: [],
      productdata: []
    }
  },
  components: {
    LunBoTu,
    Topcom,
    HeadeCom,
    FooterCom,
    LatestTopic,
    ProductCom
  },
  async created() {
    this.$http.get('/home/category/head', {}).then(value => {
      const { data: res } = value
      bus.emit('getValue', value)
      this.headdata = res.result
      return res.result
    })
    const { data: res } = await this.$http.get('/home/goods')
    this.productdata = res.result
    console.log(res.result[0].picture)
  }
}
</script>

<style lang="less" scoped></style>
