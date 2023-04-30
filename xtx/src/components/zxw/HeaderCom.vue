<template>
  <div class="head">
    <div class="wrapper">
      <div class="pic">
        <a href="javaScript:;"></a>
      </div>
      <div class="list">
        <li v-for="(i, index) in data" :key="i.id" :index="index" @mouseenter="enter" @mouseleave="leave" v-load="flag">
          <a href="javaScript:;">{{ i.name }}</a>
          <el-collapse-transition>
            <div class="options" v-show="status[index]">
              <ul class="center">
                <li v-for="c in i.children" :key="c.id">
                  <div class="img">
                    <img :src="c.picture" alt="" />
                  </div>
                  <p>{{ c.name }}</p>
                </li>
              </ul>
            </div>
          </el-collapse-transition>
        </li>
      </div>
      <div class="input">
        <el-icon><Search /></el-icon>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <a href="javaScript:;">
          <el-icon class="big"><ShoppingCart /></el-icon>
          <em>0</em>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
let timer = 0
export default {
  data() {
    return {
      status: [false, false, false, false, false, false, false, false, false],
      defdata: [
        { id: '1', name: '' },
        { id: '2', name: '' },
        { id: '3', name: '' },
        { id: '4', name: '' },
        { id: '5', name: '' },
        { id: '6', name: '' },
        { id: '7', name: '' },
        { id: '8', name: '' },
        { id: '9', name: '' },
        { id: '10', name: '' }
      ]
    }
  },
  props: {
    prodata: {}
  },
  computed: {
    data() {
      if (this.prodata.length !== 0) {
        let value = [{ id: 999, name: '首页' }].concat(this.prodata)
        return value
      }
      return this.defdata
    },
    flag() {
      if (this.prodata.length !== 0) {
        return true
      }
      return false
    }
  },
  methods: {
    enter(e) {
      if (e.target.children[0].innerText === '首页') return
      clearTimeout(timer)
      e.target.children[1].style.cssText = ` box-shadow: 0px -1px 4px -1px #ccc;`
      this.status.splice(e.target.getAttribute('index'), e.target.getAttribute('index') + 1, true)
    },
    leave() {
      timer = setTimeout(() => {
        this.status = [false, false, false, false, false, false, false, false, false]
      }, 10)
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 130px;
  background-color: #fff;
  .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    .pic {
      width: 200px;
      height: 100%;
      a {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        background-image: url(../../../public/img/logo.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 0 18px;
      }
    }
    .list {
      display: flex;
      position: relative;
      li {
        list-style: none;
        margin: 0 20px;
        a {
          display: block;
          min-width: 40px;
          height: 20px;
          padding-bottom: 6px;
        }
        a:hover {
          border-bottom: 1px solid #27ba9b;
        }
        .options {
          position: absolute;
          z-index: 999;
          left: -213px;
          top: 45px;
          .center {
            margin: 0 auto;
            width: 1240px;
            height: 120px;
            display: flex;
            align-items: center;
            background-color: #fff;
            box-shadow: 0px -1px 4px -1px #ccc;
            padding-left: 100px;
            li {
              .img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .input {
      width: 170px;
      height: 30px;
      display: flex;
      align-items: center;
      box-shadow: #ccc 1px 1px 4px 0px;
      i {
        margin-left: 3px;
      }
      input {
        color: #ccc;
        margin-left: 5px;
        width: 140px;
        height: 20px;
      }
    }
    .cart {
      position: relative;
      width: 30px;
      height: 30px;
      // background-color: red;
      a {
        display: block;
        width: 100%;
        height: 100%;
        .big {
          font-size: 30px;
        }
        em {
          width: 15px;
          height: 15px;
          position: absolute;
          right: -7px;
          top: -4px;
          background-color: red;
          color: #fff;
          font-size: 13px;
          text-align: center;
          line-height: 15px;
          border-radius: 50%;
        }
      }
    }
  }
}
.opne {
  display: block;
}
.close {
  display: none;
}
</style>
