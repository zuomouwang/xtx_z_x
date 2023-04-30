<script>
export default {
  data() {
    return {
      tutu: [],
      status: false
    }
  },
  methods: {
    async initBookList() {
      const data = await this.$http.get('/home/banner')
      if (data.status === 200) {
        this.status = true
      }
      this.tutu = data.data.result
    }
  },
  created() {
    this.initBookList()
  }
  // directives: {
  //   load(el) {
  //     console.log(el)
  //     // console.log(getComputedStyle(el, null).backgroundColor);
  //     // el.style.cssText = `height: 500px;background-color: aqua; `
  //     el.classList.add('loading')
  //   }
  // }
}
</script>
<template>
  <div class="tutu-container" v-load="status">
    <div class="block text-center">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in tutu" :key="item.id">
          <img :src="item.imgUrl" alt="推荐商品图" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style lang="less" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
