<template>
  <div>
    <Topcom userName="左兴旺"></Topcom>
  </div>
</template>

<script>
import Topcom from '../components/zxw/TopCom.vue'
export default {
  data() {
    return {}
  },
  components: {
    Topcom
  },
  async created() {
    const { data: res } = await this.$http.get('/home/goods', {})
    console.log(res)
  }
}
</script>

<style lang="scss" scoped></style>
