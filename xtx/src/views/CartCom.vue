<template>
  <div class="cart">
    <GoodsRe :relevant="relevant" :flag="flag"></GoodsRe>
  </div>
</template>

<script>
import GoodsRe from '../components/zxw/GoodsRelevant.vue'
export default {
  data() {
    return {
      relevant: undefined,
      flag: false
    }
  },
  components: {
    GoodsRe
  },
  async created() {
    const { data: relevant } = await this.$http.get('goods/relevant', {
      params: {
        id: 4000635,
        limit: 16
      }
    })
    this.relevant = relevant.result
    this.flag = true
  }
}
</script>

<style lang="less" scoped></style>
