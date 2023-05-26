<template>
  <div :class="['cart', flag ? '' : 'load']" v-loading="!flag" @click="hide">
    <div class="wrapper">
      <div class="top">
        <a href="#/">首页</a>
        <el-icon><ArrowRight /></el-icon>
        <a href="JavaScript:;">购物车</a>
      </div>
      <div class="goods">
        <div class="nav">
          <div class="all"><input type="checkbox" v-model="allchecked" /><span>全选</span></div>
          <div class="goodsmsg"><p>商品信息</p></div>
          <div class="price"><p>单价</p></div>
          <div class="count"><p>数量</p></div>
          <div class="total"><p>总价</p></div>
          <div class="remove"><p>操作</p></div>
        </div>
        <div class="item" v-for="i in list" :key="i.index">
          <div class="all">
            <input type="checkbox" v-model="i.checked" ref="checked" @click="storage(i.index)" /><span> </span>
          </div>
          <div class="goodsmsg">
            <a :href="'#/Goods/' + i.goodsid" class="left">
              <img :src="i.picture" :alt="i.name" />
            </a>
            <div class="right">
              <p>{{ i.name }}</p>
              <div class="sku">
                <span class="description" @click="windowdisp($event, i.index)">
                  {{ i.kind }} <el-icon><ArrowDown /> </el-icon>
                </span>
                <div
                  v-if="windowdata"
                  :class="['selection', i.window ? 'selected' : '', !windowflag ? 'none' : '']"
                  :index="i.index"
                  v-loading="!windowflag"
                >
                  <div class="sku1" v-for="(i, index) in windowdata.specs" :key="index">
                    <div class="left">
                      <span>{{ i.name }}</span>
                    </div>
                    <div class="right" v-if="i.values[0].picture">
                      <img
                        :src="i.picture"
                        :alt="i.name"
                        v-for="(i, num) in i.values"
                        :key="num"
                        :class="[i.checked ? 'checked' : '']"
                        @click="sku(index, num)"
                      />
                    </div>
                    <div class="right" v-else>
                      <span
                        v-for="(i, num) in i.values"
                        :key="num"
                        :class="[i.checked ? 'checked' : '']"
                        @click="sku(index, num)"
                        >{{ i.name }}</span
                      >
                    </div>
                  </div>
                  <el-button size="small" text @click=";(i.window = false), (this.dispflag = false)">取消</el-button>
                  <el-button size="small" type="primary" @click="isOk(i)"> 确定 </el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="price">
            <p>￥{{ i.price }}</p>
          </div>
          <div class="count">
            <a href="Javascript:;" @click="subtract(i.index)">-</a>
            <em>{{ i.num }}</em>
            <a href="JavaScript:;" @click="add(i.index)">+</a>
          </div>
          <div class="total">
            <p>￥{{ i.total }}</p>
          </div>
          <div class="remove"><a href="JavaScript:;" :index="i.index" @click="remove(i.index)">删除</a></div>
        </div>
      </div>
      <div class="foot">
        <div class="all"><input type="checkbox" v-model="allchecked" /><span>全选</span></div>
        <a href="JavaScript:;" @click="removechecked">删除商品</a>
        <div class="emp"></div>
        <span>共 {{ allnum }} 件</span>
        <span>已选择 {{ checkednum }} 件</span>
        <span
          >合计：<em>￥{{ money }}</em></span
        >
        <button>下单结算</button>
      </div>
    </div>
    <GoodsRe :relevant="relevant" :flag="flag"></GoodsRe>
  </div>
</template>

<script>
import GoodsRe from '../components/zxw/GoodsRelevant.vue'

export default {
  data() {
    return {
      relevant: undefined, // 获取数据
      flag: false, //加载标志
      windowflag: false, //小窗加载标志
      visible: false, //小窗显示的标志
      dispflag: true, //下窗显示的标志 (与关闭小窗有关)
      list: undefined, //用户购物车
      user: undefined, //当前用户
      windowdata: undefined
      // allchecked: false, //全选标志
      // checkednum: undefined, //已选择多少商品
      // allnum: undefined //所有商品数量
    }
  },
  components: {
    GoodsRe
  },
  computed: {
    allchecked: {
      get() {
        return this.list.every(i => i.checked == true)
      },
      set(newval) {
        this.list.forEach(i => {
          i.checked = newval
        })
        let cart = JSON.parse(localStorage.getItem('account'))
        let index = cart.findIndex(i => {
          return i.name == this.user
        })
        cart[index].cart = this.list
        localStorage.setItem('account', JSON.stringify(cart))
      }
    },
    checkednum() {
      let list = this.list.filter(i => i.checked == true)
      let num = 0
      list.forEach(i => {
        num = num + i.num
      })
      return num
    },
    allnum() {
      let num = 0
      this.list.forEach(i => {
        num = num + i.num
      })
      return num
    },
    money() {
      let list = this.list.filter(i => i.checked == true)
      let num = 0
      list.forEach(i => {
        num = num + Number.parseFloat(i.total)
      })
      return num.toFixed(2)
    }
  },
  methods: {
    hide(e) {
      let target = document.querySelector('.cart .wrapper .goods .item .goodsmsg .right .sku .selected')
      if (!target) return

      let index = this.list.findIndex(i => {
        return i.index == target.getAttribute('index')
      })
      let arr = getAllDescendants(target)
      function getAllDescendants(element) {
        const descendants = []

        function traverse(node) {
          if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
            descendants.push(node)
          }
          if (node.hasChildNodes()) {
            const children = node.childNodes
            for (let i = 0; i < children.length; i++) {
              traverse(children[i])
            }
          }
        }
        traverse(element)
        return descendants
      }

      if (arr.findIndex(i => i == e.target) == -1) {
        if (!this.dispflag) return (this.dispflag = !this.dispflag)
        this.list[index].window = false
        this.dispflag = false
        this.windowflag = false
        // this.windowdata = undefined
      }
    },
    add(id) {
      let index = this.list.findIndex(i => {
        return i.index == id
      })
      if (this.list[index].num == 99) return
      this.list[index].num++
      this.list[index].total = (this.list[index].num * this.list[index].price).toFixed(2)
      let cart = JSON.parse(localStorage.getItem('account'))
      index = cart.findIndex(i => {
        return i.name == this.user
      })
      cart[index].cart = this.list
      localStorage.setItem('account', JSON.stringify(cart))
    },
    subtract(id) {
      let index = this.list.findIndex(i => {
        return i.index == id
      })
      if (this.list[index].num == 1) return
      this.list[index].num--
      this.list[index].total = (this.list[index].num * this.list[index].price).toFixed(2)
      let cart = JSON.parse(localStorage.getItem('account'))
      index = cart.findIndex(i => {
        return i.name == this.user
      })
      cart[index].cart = this.list
      localStorage.setItem('account', JSON.stringify(cart))
    },
    removechecked() {
      let arr = []
      this.list.forEach((i, index) => {
        if (i.checked == true) {
          arr.push(index)
        }
      })
      if (arr.length == 0) return
      arr.reverse()
      arr.forEach(i => {
        this.list.splice(i, 1)
      })
      let cart = JSON.parse(localStorage.getItem('account'))
      let index = cart.findIndex(i => {
        return i.name == this.user
      })
      cart[index].cart = this.list
      localStorage.setItem('account', JSON.stringify(cart))
    },
    remove(id) {
      let index = this.list.findIndex(i => {
        return i.index == id
      })
      this.list.splice(index, 1)
      let cart = JSON.parse(localStorage.getItem('account'))
      index = cart.findIndex(i => {
        return i.name == this.user
      })
      cart[index].cart = this.list
      localStorage.setItem('account', JSON.stringify(cart))
    },
    storage() {
      this.$nextTick(() => {
        setTimeout(() => {
          let cart = JSON.parse(localStorage.getItem('account'))
          let index = cart.findIndex(i => {
            return i.name == this.user
          })
          cart[index].cart = this.list
          localStorage.setItem('account', JSON.stringify(cart))
        }, 0)
      })
    },
    async windowdisp(e, id) {
      let index = this.list.findIndex(i => {
        return i.index == id
      })
      this.list[index].window = true
      // this.dispflag = true
      this.hide(e)
      const { data: res } = await this.$http.get(`goods/sku/${this.list[index].id}`, {})
      res.result.specs.forEach(i => {
        i.values.forEach((i, index) => {
          if (index == 0) {
            i.checked = true
          } else {
            i.checked = false
          }
        })
      })
      this.windowdata = res.result
      this.windowflag = true
    },
    sku(index, num) {
      this.windowdata.specs[index].values.forEach(i => {
        i.checked = false
      })
      this.windowdata.specs[index].values[num].checked = true
    },
    isOk(i) {
      i.window = false
      this.dispflag = false
      let str = ''
      let kind = []
      let name = []
      this.windowdata.specs.forEach(i => {
        str = str + i.name + ':'
        let arr = i.values.filter(i => {
          return i.checked == true
        })
        kind.push(arr[0].name)
        name.push(i.name)
        str = str + arr[0].name + ' '
      })
      let index = kind.length
      let arr = this.windowdata.skus
      for (let i = 0; i < index; i++) {
        arr = arr.filter(e => {
          return e.specs[i].valueName == kind[i]
        })
      }
      // console.log(arr[0])
      // console.log(i)
      i.id = arr[0].id
      i.price = arr[0].price
      i.total = (i.num * arr[0].price).toFixed(2)
      i.kind = str
      let cart = JSON.parse(localStorage.getItem('account'))
      index = cart.findIndex(i => {
        return i.name == this.user
      })
      cart[index].cart = this.list
      localStorage.setItem('account', JSON.stringify(cart))
    }
  },
  async created() {
    let cart = JSON.parse(localStorage.getItem('account'))
    cart.forEach(i => {
      i.cart.forEach((i, index) => {
        i.total = (i.num * i.price).toFixed(2)
        i.index = index
      })
    })
    this.list = cart[cart.findIndex(i => i.name == localStorage.getItem('token'))].cart
    // console.log(cart[cart.findIndex(i => i.name == localStorage.getItem('token'))].cart)
    this.user = localStorage.getItem('token')

    const { data: relevant } = await this.$http.get('goods/relevant', {
      params: {
        id: 4000635,
        limit: 16
      }
    })
    this.relevant = relevant.result
    setTimeout(() => {
      this.flag = true
    }, 500)
  },
  beforeUnmount() {}
}
</script>

<style lang="less" scoped>
.cart {
  background-color: #f5f5f5;
  .wrapper {
    .top {
      display: flex;
      align-items: center;
      height: 72px;
      a,
      i {
        font-size: 15px;
        margin-right: 5px;
      }
    }
    .goods {
      width: 100%;
      .nav,
      .item {
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #f5f5f5;
        .all,
        .remove,
        .goodsmsg,
        .price,
        .count,
        .total {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #666;
        }
        .all {
          input[type='checkbox'] {
            margin-right: 5px;
          }
          span {
            width: 32px;
          }
        }
        .goodsmsg {
          flex: 3.33;
          height: 100px;
          .left {
            height: 100%;
            width: 100px;
            margin-right: 8px;
          }
          .right {
            flex: 1;
            p {
              max-width: 270px;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .sku {
              margin-top: 10px;
              position: relative;
              .description {
                padding: 5px;
                max-width: 230px;
                font-size: 14px;
                color: #999;
                border: 1px solid #f5f5f5;
              }
              .selection {
                z-index: 2000;
                position: absolute;
                left: -1px;
                top: 40px;
                width: 440px;
                border: 1px solid #27ba9b;
                box-shadow: 2px 2px 4px #e6faf6;
                background: #fff;
                border-radius: 4px;
                font-size: 14px;
                padding: 20px;
                display: none;
                .sku1 {
                  display: flex;
                  align-items: center;
                  .left {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 10px;
                  }
                  .right {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 300px;
                    .checked {
                      border: 1px solid var(--lv);
                    }
                    img {
                      cursor: pointer;
                      border: 1px solid #e4e4e4;
                      width: 48px;
                      height: 48px;
                      margin-right: 10px;
                      margin-bottom: 5px;
                    }
                    span {
                      border: 1px solid #e4e4e4;
                      width: 130px;
                      margin-right: 10px;
                      margin-bottom: 5px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 30px;
                      cursor: pointer;
                    }
                  }
                }
              }
              .selection::before {
                content: '';
                width: 12px;
                height: 12px;
                border-left: 1px solid #27ba9b;
                border-top: 1px solid #27ba9b;
                position: absolute;
                left: 12px;
                top: -8px;
                background: #fff;
                transform: scaleX(0.8) rotate(45deg);
              }
              .selected {
                display: block;
              }
              .none .sku1,
              .none button {
                display: none;
              }
              .none {
                width: 400px;
                height: 200px;
              }
            }
          }
        }
        .price {
          flex: 1.833;
          font-size: 14px;
        }
        .count {
          flex: 1.5;

          a {
            display: block;
            width: 28px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            background-color: #f5f5f5;
            border: 1px solid #e4e4e4;
          }
          em {
            width: 60px;
            height: 28px;
            text-align: center;
            border-top: 1px solid #e4e4e4;
            border-bottom: 1px solid #e4e4e4;
            line-height: 28px;
          }
        }
        .total {
          flex: 1.5;
          font-size: 16px;
        }
        .remove {
          flex: 1.166;
          a {
            color: var(--lv);
          }
        }
      }
      .item {
        height: 120px;
        .total {
          color: #cf4444;
        }
      }
    }
    .foot {
      margin: 20px 0;
      display: flex;
      height: 80px;
      align-items: center;
      background-color: #fff;
      padding-left: 30px;
      justify-content: space-between;
      color: #666;
      a {
        color: #666;
      }
      .emp {
        width: 300px;
      }
      .all {
        input[type='checkbox'] {
          margin-right: 5px;
        }
        span {
          width: 32px;
        }
      }
      span {
        em {
          font-size: 18px;
          margin-right: 20px;
          font-weight: 700;
          color: #cf4444;
        }
      }
      button {
        border: 1px solid #27ba9b;
        background: #27ba9b;
        color: #fff;
        width: 180px;
        height: 50px;
        font-size: 16px;
        margin-right: 40px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  /deep/ .wrapper {
    .goods-relevant {
      margin-bottom: 0 !important;
    }
  }
}
.cart.load {
  margin: 0 auto;
  width: 1240px;
  height: 500px;
  background-color: #fff;
  * {
    display: none;
  }
}
.el-popper {
  .sku {
    display: flex;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      max-width: 300px;
      .checked {
        border: 1px solid var(--lv);
      }
      img {
        border: 1px solid #e4e4e4;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        margin-bottom: 5px;
      }
      span {
        border: 1px solid #e4e4e4;
        width: 130px;
        margin-right: 10px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        cursor: pointer;
      }
    }
  }
  .el-button.is-text {
    margin-left: 260px;
  }
}
</style>
