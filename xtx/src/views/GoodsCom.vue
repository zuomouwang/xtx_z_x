<template>
  <div class="Goods">
    <PicturE :data="result" :status="flag"></PicturE>
    <GoodsRelevantVue :flag="flag" :relevant="relevant"></GoodsRelevantVue>
    <GoodsIntroductionVue :details="details" :flag="flag"></GoodsIntroductionVue>
  </div>
</template>

<script>
import GoodsRelevantVue from '../components/zxw/GoodsRelevant.vue' //同类商品介绍模块
import GoodsIntroductionVue from '../components/zxw/GoodsIntr.vue' //商品图文介绍模块
import PicturE from '../components/xxc/Picture/PicturE.vue'
export default {
  data() {
    return {
      res: undefined,
      result: undefined,
      name: undefined,
      relevant: undefined,
      details: undefined
    }
  },
  computed: {
    flag() {
      if (this.res != undefined && this.relevant != undefined) return true
      return false
    }
  },
  components: {
    GoodsRelevantVue,
    GoodsIntroductionVue,
    PicturE
  },
  props: {
    id: {
      default: 10086
    }
  },
  async created() {
    console.log(this.id)
    const { data: res } = await this.$http.get('/goods', {
      params: {
        id: this.id
      }
    })
    this.res = res
    this.result = res.result
    console.log(res)
    console.log(this.result)
    this.details = res.result.details
    this.details.hotByDay = res.result.hotByDay
    // https://apipc-xiaotuxian-front.itheima.net/goods/relevant?id=4001874&limit=16
    const { data: relevant } = await this.$http.get('goods/relevant', {
      params: {
        id: this.id,
        limit: 16
      }
    })
    this.relevant = relevant.result
    // const { data: post } = await this.$http.post('/category/goods/temporary', {
    //   page: 3,
    //   pageSize: 20,
    //   categoryId: '109296002'
    // })
    // this.list = post
  }
}
</script>

<style lang="less" scoped>
.Goods {
  width: 100%;
  height: 100%;
  background-color: var(--hui);
}
</style>
