<template>
  <div class="panel-contaier wrapper">
    <HeadBox :data="categoryBanners" :status="status"></HeadBox>
    <BottomBox :data="freshGoods" :status="status"></BottomBox>
  </div>
</template>

<script>
import HeadBox from './Head/HeadBox.vue'
import BottomBox from './BottomBox.vue'
import bus from '../../../eventBus'
export default {
  components: {
    HeadBox,
    BottomBox
  },
  props: [],
  data() {
    return {
      categoryBanners: [],
      freshGoods:[],
      status: false
    }
  },
  created() {
    //接收外部传递过来的总数据 存到data
    bus.on('getIndex', value => {
      // this.data = value.data.result
      // console.log(value)
      // comst [ id: n] = value.data.result.categoryBanners
      this.categoryBanners = value.data.result.categoryBanners
      this.freshGoods= value.data.result.freshGoods
      // console.log(value.data.result.categoryBanners[0].name)
      if (value.status === 200) {
        this.status = true
      }
    })
  }

  ///home/index
}
</script>

<style lang="less" scoped>
.panel-contaier {
  height: 540px;
  p {
    font-size: 50px;
    color: red;
    margin-left: 66px;
    font-weight: 700;
  }
}
</style>
