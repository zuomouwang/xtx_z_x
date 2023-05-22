<template>
  <div class="wrapper">
    <div class="picture-container" ref="Picture">
      <div class="bigPicture" ref="bigPicture"></div>
      <div class="allBox">
        <div
          class="smallPicture"
          ref="smallPicture"
          v-if="status"
          :style="`background-image:url(${this.data.mainPictures[0]})`"
          @pointermove="inPicture"
          @pointerleave="outPicture"
        >
          <div class="move"></div>
        </div>
        <ul class="lis">
          <li v-for="(item, index) in data.mainPictures" :key="item.id" :data-index="index" @pointerenter="inLis">
            <!-- :style="`background-image:url(${this.data.mainPictures[index]})`" -->
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        mainPictures: []
      },
      status: false
    }
  },
  methods: {
    inLis(e) {
      // console.log(e.target.getAttribute('data-index'))
      const lis = this.$el.querySelectorAll('.lis li')
      // console.log(lis)
      lis.forEach((li, i) => {
        if (i === parseInt(e.target.getAttribute('data-index'))) {
          li.classList.add('act')
          // console.log(li, li.classList)
        } else {
          li.classList.remove('act')
        }
      })
      const img = e.target.getElementsByTagName('img')[0]
      const backgroundImage = `url(${img.getAttribute('src')})`
      this.$refs.smallPicture.style.backgroundImage = backgroundImage
      this.$refs.bigPicture.style.backgroundImage = backgroundImage
    },
    inPicture(e) {
      const Picture = this.$el.querySelector('.picture-container')
      const move = this.$el.querySelector('.allBox .smallPicture .move')
      move.style.display = 'block'
      // console.log('big:' + Picture.offsetLeft, Picture.offsetTop)
      // console.log('small:' + move.offsetLeft, move.offsetTop)
      // console.log(e.clientX, e.clientY)
      // console.log(e.clientX - Picture.offsetLeft - move.offsetWidth / 2)
      // console.log(e.clientY - Picture.offsetTop - move.offsetHeight / 2)
      const bigPicture = this.$el.querySelector('.bigPicture')
      bigPicture.style.display = 'block'
      move.style.left = `${e.clientX - Picture.offsetLeft - move.offsetWidth / 2}px`
      move.style.top = `${e.clientY - Picture.offsetTop - move.offsetHeight / 2}px`
      if (e.clientX - Picture.offsetLeft - move.offsetWidth / 2 < 0) {
        move.style.left = `0px`
      } else if (e.clientX - Picture.offsetLeft - move.offsetWidth / 2 > 200) {
        move.style.left = `200px`
      }
      if (e.clientY - Picture.offsetTop - move.offsetHeight / 2 < 0) {
        move.style.top = `0px`
      } else if (e.clientY - Picture.offsetTop - move.offsetHeight / 2 > 200) {
        move.style.top = `200px`
      }
      // console.log(-2 * parseInt(move.style.left))
      bigPicture.style.backgroundPosition = `${-2 * parseInt(move.style.left)}px ${-2 * parseInt(move.style.top)}px`
      // bigPicture.style.backgroundPosition = `-${move.style.left} -${move.style.top}`
    },
    outPicture() {
      this.$el.querySelector('.allBox .smallPicture .move').style.display = 'none'

      this.$el.querySelector('.bigPicture').style.display = 'none'
    }
  },
  async created() {
    await this.$http.get('/goods?id=4003488').then(value => {
      // console.log(value)
      this.data.mainPictures = value.data.result.mainPictures
      // console.log(this.data[0])
      if (value.status === 200) {
        this.status = true
      }
      // console.log(this.data.mainPictures)
    })

    // console.log(this.data[0])
  },
  mounted() {},
  updated() {
    const lis = this.$el.querySelectorAll('.lis li')
    if (lis.length > 0) {
      lis[0].classList.add('act')
    }
    // this.$refs.smallPicture.style.background = `url(${this.data.mainPictures[0]})`
    // this.$refs.lis.style.background = `url(${this.data.mainPictures[0]})`
  }
}
</script>

<style lang="less" scoped>
.picture-container {
  width: 480px;
  height: 400px;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  // background:url(),no-repeat;
  .bigPicture {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    display: none;
    background-color: #27ba9b;
    background-position: 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .allBox {
    display: flex;
    // position: absolute;
    // left: 0;
    // top: 0;
    .smallPicture {
      width: 400px;
      height: 400px;
      background-color: pink;
      background-size: 400px 400px;
      cursor: move;
      .move {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 200px;
        display: none;
        background: rgba(0, 0, 0, 0.2);
      }
    }
    .lis {
      width: 80px;
      li {
        width: 68px;
        height: 68px;
        background-color: pink;
        background-size: 68px 68px;
        margin-left: 12px;
        margin-bottom: 15px;
        cursor: pointer;
      }
    }
  }
}
.act {
  border: 2px solid #27ba9b;
}
</style>
