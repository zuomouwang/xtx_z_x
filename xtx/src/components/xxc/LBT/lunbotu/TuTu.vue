<script>
import axios from 'axios'
export default {
  data() {
    return {
      tutu: []
    }
  },
  methods: {
    async initBookList() {
      const { data: tu } = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/home/banner')
      this.tutu = tu.result
      console.log(tu.result)
    },
    test() {
      console.log(this.tutu.imgUrl)
    }
  },
  created() {
    this.initBookList()
  }
}
</script>
<template>
  <div class="tutu-container">
    <div class="block text-center">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in tutu" :key="item">
          <img :src="tutu.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
