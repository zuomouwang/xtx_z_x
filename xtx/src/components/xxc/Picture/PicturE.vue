<template>
  <div class="wrapper">
    <div class="picture-container" ref="Picture">
      <div class="head">
        <div>
          <a href="">首页</a>
        </div>
        <i>></i>
        <div>
          <a href="">
            {{ this.data.categories[1].name }}
          </a>
        </div>
        <i>></i>
        <div>
          <a href="">
            {{ this.data.categories[0].name }}
          </a>
        </div>
        <i>></i>
        <span>{{ this.data.name }}</span>
      </div>
      <div class="allBox">
        <div class="right">
          <div class="right-pic">
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
            <ul class="lis" v-if="status">
              <li v-for="(item, index) in data.mainPictures" :key="item.id" :data-index="index" @pointerenter="inLis">
                <!-- :style="`background-image:url(${this.data.mainPictures[index]})`" -->
                <img :src="item" alt="" />
              </li>
            </ul>
            <div
              class="bigPicture"
              ref="bigPicture"
              v-if="status"
              :style="`background-image:url(${this.data.mainPictures[0]})`"
            ></div>
          </div>
          <ul class="right-bottom">
            <li v-for="item in 4" :key="item">
              <p>销量人气</p>
              <p>200+</p>
              <p><i>tu</i>销量人气</p>
            </li>
          </ul>
        </div>
        <div class="left">
          <p class="l-name">{{ this.data.name }}</p>
          <p class="l-desc">{{ this.data.desc }}</p>
          <p class="l-price">
            <span>{{ this.data.price }}</span
            ><span>{{ this.data.oldPrice }}</span>
          </p>
          <div class="mes">
            <dl>
              <dt>促销</dt>
              <dd>12月好物放送，App领券购买直降120元</dd>
            </dl>
            <dl>
              <dt>配送</dt>
              <dd></dd>
            </dl>
            <dl>
              <dt>服务</dt>
              <dd><span>无忧退货</span><span>快速退款</span><span>免费包邮</span></dd>
            </dl>
          </div>
          <div class="kind">
            <dl>
              <dt>{{ this.data.specs[0].name }}</dt>
              <dd><img :src="item.picture" alt="" v-for="(item, index) in data.specs[0].values" :key="index" /></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'status'],
  data() {
    return {
      // data: {
      //   mainPictures: []
      // },
      // status: false
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
      const Picture = this.$el.querySelector('.right-pic')
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
    // await this.$http.get('/goods?id=4003488').then(value => {
    //   // console.log(value)
    //   this.data.mainPictures = value.data.result.mainPictures
    //   // console.log(this.data[0])
    //   if (value.status === 200) {
    // this.flag = this.status
    //   }
    //   // console.log(this.data.mainPictures)
    // })
    // console.log(this.data[0])
    // console.log(this.data)
    // console.log(this.flag)
  },
  mounted() {
    const lis = this.$el.querySelectorAll('.lis li')
    if (lis.length > 0) {
      lis[0].classList.add('act')
    }
  },
  updated() {
    // this.$refs.smallPicture.style.background = `url(${this.data.mainPictures[0]})`
    // this.$refs.lis.style.background = `url(${this.data.mainPictures[0]})`
  }
}
</script>

<style lang="less" scoped>
.picture-container {
  width: 1240px;
  min-height: 600px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  font-size: 14px;
  background: #f5f5f5;
  // background:url(),no-repeat;
  .head {
    display: flex;
    padding: 25px 10px;
    // text-align: center;
    line-height: 14px;
    div {
      // line-height: 14px;
      a {
        color: #666;
        transition: all 0.4s;
        &:hover {
          color: #27ba9b;
        }
      }
    }
    i {
      font-size: 14px;
      margin-left: 5px;
      margin-right: 5px;
      line-height: 14px;
    }
  }
  .allBox {
    display: flex;
    // overflow: hidden;
    background: #fff;
    // position: absolute;
    // left: 0;
    // top: 0;
    .right {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
      .right-pic {
        display: flex;
        position: relative;
        .smallPicture {
          width: 400px;
          height: 400px;
          // background-color: pink;
          background: #f5f5f5;
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
        .lis {
          width: 80px;
          li {
            width: 68px;
            height: 68px;
            // background-color: pink;
            background-size: 68px 68px;
            margin-left: 12px;
            margin-bottom: 15px;
            cursor: pointer;
          }
        }
      }
      .right-bottom {
        display: flex;
        width: 400px;
        align-items: center;
        text-align: center;
        height: 140px;
        background-color: aqua;
        li {
          flex: 1;
        }
      }
    }
    .left {
      flex: 1;
      padding: 30px 30px 30px 0;
      .l-name {
        font-size: 22px;
      }
      .l-desc {
        color: #999;
        margin-top: 10px;
      }
      .l-price {
        margin-top: 10px;
        span {
          color: #cf4444;
          margin-right: 10px;
          font-size: 22px;
          &:last-child {
            color: #999;
            text-decoration: line-through;
            font-size: 16px;
          }
          &::before {
            content: '¥';
            font-size: 14px;
          }
        }
      }
      .mes {
        background: #f5f5f5;
        width: 500px;
        padding: 20px 10px 0 10px;
        margin-top: 10px;
        dl {
          padding-bottom: 20px;
          display: flex;
          align-items: center;
          dt {
            width: 50px;
            color: #999;
          }
          dd {
            color: #666;
            span {
              margin-right: 10px;
              &::before {
                content: '•';
                color: rgb(39, 186, 155);
                margin-right: 2px;
              }
            }
          }
        }
      }
      .kind {
        padding-left: 10px;
        padding-top: 20px;
        dl {
          display: flex;
          padding-bottom: 10px;
          align-items: center;
          dt {
            width: 50px;
            color: #999;
          }
          dd {
            flex: 1;
            color: #666;
            line-height: 40px;
            img {
              width: 50px;
              height: 50px;
              margin-bottom: 5px;
              border: 1px solid #e4e4e4;
              margin-right: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
.act {
  border: 2px solid #27ba9b;
}
</style>
