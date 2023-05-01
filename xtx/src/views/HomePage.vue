<template>
  <div>
    <Topcom :userName="name"></Topcom>
    <HeadeCom :prodata="headdata"></HeadeCom>
    <LunBoTu></LunBoTu>
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
export default {
  data() {
    return {
      name: undefined,
      headdata: []
    }
  },
  components: {
    LunBoTu,
    Topcom,
    HeadeCom,
    FooterCom,
    LatestTopic
  },
  created() {
    this.$http.get('/home/category/head', {}).then(value => {
      const { data: res } = value
      bus.emit('getValue', value)
      this.headdata = res.result
      return res.result
    })
  }
}
</script>

<style lang="less" scoped></style>
