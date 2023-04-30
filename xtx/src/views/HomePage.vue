<template>
  <div>
    <Topcom :userName="name"></Topcom>
    <HeadeCom :prodata="headdata"></HeadeCom>
    <LunBoTu></LunBoTu>
  </div>
</template>

<script>
import LunBoTu from '../components/xxc/LBT/LunBoTu.vue'
import Topcom from '../components/zxw/TopCom.vue'
import HeadeCom from '../components/zxw/HeaderCom.vue'
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
    HeadeCom
  },
  created() {
    this.$http.get('/home/category/head', {}).then(value => {
      const { data: res } = value
      this.headdata = res.result
      return res.result
    })
  }
}
</script>

<style lang="less" scoped></style>
