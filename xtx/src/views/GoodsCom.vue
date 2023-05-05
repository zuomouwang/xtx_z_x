<template>
  <div class="Good">
    <h1>商品详细界面-----商品id={{ id }}</h1>
    <span>{{ res }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: undefined,
      list: undefined
    }
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
    const { data: post } = await this.$http.post('/category/goods/temporary', {
      page: 3,
      pageSize: 20,
      categoryId: '109296002'
    })
    this.list = post
  }
}
</script>

<style lang="less" scoped></style>
