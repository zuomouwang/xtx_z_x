<template>
  <div class="Good"></div>
</template>

<script>
export default {
  data() {
    return {
      res: undefined,
      flag: false,
      name: undefined
    }
  },
  props: {
    id: {
      default: 10086
    }
  },
  components: {},
  async created() {
    console.log(this.id)
    this.$bus.on('emitHeaddata', value => {
      console.log(value)
    })
    const { data: res } = await this.$http.get('/goods', {
      params: {
        id: this.id
      }
    })
    this.res = res
    this.flag = true
    // const { data: post } = await this.$http.post('/category/goods/temporary', {
    //   page: 3,
    //   pageSize: 20,
    //   categoryId: '109296002'
    // })
    // this.list = post
  }
}
</script>

<style lang="less" scoped></style>
