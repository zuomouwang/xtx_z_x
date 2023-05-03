<template>
  <div class="reMen-container wrapper">
    <HeadBox :status="status">
      <template #default>热门品牌</template>
      <template #small>国际经典 品质保证</template>
      <template #swith>
        <div class="swith">
          <a href="javaScript:;" @click="shang"> &lt;</a>
          <a href="javaScript:;" @click="xia"> &gt; </a>
        </div>
      </template>
    </HeadBox>
  </div>
</template>

<script>
import HeadBox from '../panel/Head/HeadBox.vue'
import bus from '../../../eventBus'
export default {
  components: {
    HeadBox
  },
  data() {
    return {
      data: [],
      status: false
    }
  },
  methods: {
    shang() {
      console.log('上')
    },
    xia() {
      console.log('下')
    }
  },
  created() {
    //接收外部传递过来的总数据 存到data
    bus.on('getReMen', value => {
      // this.data = value.data.result
      console.log(value)
      if (value.status === 200) {
        this.status = true
      }
    })
  }
}
</script>

<style lang="less" scoped>
.swith {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 35px;
  background-color: aqua;
  a {
    text-align: center;
    margin: 0 5px;
    width: 26px;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    background-color: #27ba9b;
  }
}
</style>
