<template>
  <div class="car">
    <div class="list"></div>
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  props: ['flag'],
  data() {
    return {
      flaga: true
    }
  },
  methods: {
    show() {
      // const car = this.$el.querySelector('.car')
    }
  },
  updated() {
    if (this.flaga === true) {
      console.log('111')
      const car1 = document.querySelector('.car')
      car1.target.style.transform = 'none'
      car1.target.style.opacity = 1
    }
  },
  created() {
    console.log(this.flag)
  },
  mounted() {
    console.log(this.flag)
  }
}
</script>

<style lang="less" scoped>
.car {
  position: absolute;
  opacity: 0;
  left: -360px;
  top: 50px;
  width: 400px;
  height: 400px;
  background-color: #27ba9b;
  transition: all 0.4s 0.2s;
  // transform: translateY(-200px) scaleY(0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  // background: #fff;
  border-radius: 4px;
  padding-top: 10px;
  &::before {
    content: '';
    position: absolute;
    right: 10px;
    top: -10px;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: scaleX(0.6) rotate(45deg);
    box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
