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
          <div class="all"><input type="checkbox" /><span>全选</span></div>
          <div class="goodsmsg"><p>商品信息</p></div>
          <div class="price"><p>单价</p></div>
          <div class="count"><p>数量</p></div>
          <div class="total"><p>总价</p></div>
          <div class="remove"><p>操作</p></div>
        </div>
        <div class="item">
          <div class="all"><input type="checkbox" /><span> </span></div>
          <div class="goodsmsg">
            <a href="JavaScript:;" class="left">
              <img src="" alt="" />
            </a>
            <div class="right">
              <p>dasdsafjdklsa;hfjsdhgklshg;kdhsagjhfgkhhhhhhhhhhhhhhhh</p>
              <div class="sku">
                <!-- <div class="selection">
                  <el-popover
                    placement="bottom"
                    title=""
                    :width="400"
                    trigger="click"
                    content="this is content, this is content, this is content"
                    hide-after="0"
                    :visible="visible"
                  >
                    <div class="sku">
                      <div class="left"><span>颜色</span></div>
                      <div class="right">
                        <img
                          class="checked"
                          src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png"
                          alt=""
                        />
                        <img src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="sku">
                      <div class="left"><span>尺码</span></div>
                      <div class="right">
                        <span class="checked">男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                      </div>
                    </div>
                    <el-button size="small" text @click="visible = false">取消</el-button>
                    <el-button size="small" type="primary" @click="visible = false">确定</el-button>

                    <template #reference>
                      <el-button class="m-2" @click="visible = true">
                        颜色:浅蓝色 尺码:女L（39-40） <el-icon><ArrowDown /> </el-icon
                      ></el-button>
                    </template>
                  </el-popover>
                </div> -->
                <span class="description" @click="visible = true">
                  颜色:浅蓝色 尺码:女L（39-40） <el-icon><ArrowDown /> </el-icon>
                </span>
                <div :class="['selection', visible ? 'selected' : '']">
                  <div class="sku1">
                    <div class="left"><span>颜色</span></div>
                    <div class="right">
                      <img
                        class="checked"
                        src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png"
                        alt=""
                      />
                      <img src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="sku1">
                    <div class="left"><span>尺码</span></div>
                    <div class="right">
                      <span class="checked">男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                    </div>
                  </div>
                  <el-button size="small" text @click=";(visible = false), (this.dispflag = false)">取消</el-button>
                  <el-button size="small" type="primary" @click=";(visible = false), (this.dispflag = false)"
                    >确定</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="price"><p>￥99.00</p></div>
          <div class="count">
            <a href="Javascript:;">-</a>
            <em>50</em>
            <a href="JavaScript:;">+</a>
          </div>
          <div class="total"><p>￥99.00</p></div>
          <div class="remove"><a href="JavaScript:;">删除</a></div>
        </div>
        <div class="item">
          <div class="all"><input type="checkbox" /><span> </span></div>
          <div class="goodsmsg">
            <a href="JavaScript:;" class="left">
              <img src="" alt="" />
            </a>
            <div class="right">
              <p>dasdsafjdklsa;hfjsdhgklshg;kdhsagjhfgkhhhhhhhhhhhhhhhh</p>
              <div class="sku">
                <!-- <div class="selection">
                  <el-popover
                    placement="bottom"
                    title=""
                    :width="400"
                    trigger="click"
                    content="this is content, this is content, this is content"
                    hide-after="0"
                    :visible="visible"
                  >
                    <div class="sku">
                      <div class="left"><span>颜色</span></div>
                      <div class="right">
                        <img
                          class="checked"
                          src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png"
                          alt=""
                        />
                        <img src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class="sku">
                      <div class="left"><span>尺码</span></div>
                      <div class="right">
                        <span class="checked">男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                        <span>男L（42-43）</span>
                      </div>
                    </div>
                    <el-button size="small" text @click="visible = false">取消</el-button>
                    <el-button size="small" type="primary" @click="visible = false">确定</el-button>

                    <template #reference>
                      <el-button class="m-2" @click="visible = true">
                        颜色:浅蓝色 尺码:女L（39-40） <el-icon><ArrowDown /> </el-icon
                      ></el-button>
                    </template>
                  </el-popover>
                </div> -->
                <span class="description" @click="visible = true">
                  颜色:浅蓝色 尺码:女L（39-40） <el-icon><ArrowDown /> </el-icon>
                </span>
                <div :class="['selection', visible ? 'selected' : '']">
                  <div class="sku1">
                    <div class="left"><span>颜色</span></div>
                    <div class="right">
                      <img
                        class="checked"
                        src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png"
                        alt=""
                      />
                      <img src="https://yanxuan-item.nosdn.127.net/174c942c9fb368aa23021ac778387ced.png" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="sku1">
                    <div class="left"><span>尺码</span></div>
                    <div class="right">
                      <span class="checked">男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                      <span>男L（42-43）</span>
                    </div>
                  </div>
                  <el-button size="small" text @click=";(visible = false), (this.dispflag = false)">取消</el-button>
                  <el-button size="small" type="primary" @click=";(visible = false), (this.dispflag = false)"
                    >确定</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="price"><p>￥99.00</p></div>
          <div class="count">
            <a href="Javascript:;">-</a>
            <em>50</em>
            <a href="JavaScript:;">+</a>
          </div>
          <div class="total"><p>￥99.00</p></div>
          <div class="remove"><a href="JavaScript:;">删除</a></div>
        </div>
        <!-- <div class="item">
          <div class="all"><input type="checkbox" /><span> </span></div>
          <div class="goodsmsg">
            <a href="JavaScript:;" class="left">
              <img src="" alt="" />
            </a>
            <div class="right">
              <p>dasdsafjdklsa;hfjsdhgklshg;kdhsagjhfgkhhhhhhhhhhhhhhhh</p>
              <div class="sku">
                <sapn class="description">
                  颜色:浅蓝色 尺码:女L（39-40） <el-icon><ArrowDown /> </el-icon>
                </sapn>
                <div class="selection"></div>
              </div>
            </div>
          </div>
          <div class="price"><p>￥99.00</p></div>
          <div class="count">
            <a href="Javascript:;">-</a>
            <em>50</em>
            <a href="JavaScript:;">+</a>
          </div>
          <div class="total"><p>￥99.00</p></div>
          <div class="remove"><a href="JavaScript:;">删除</a></div>
        </div> -->
      </div>
      <div class="foot">
        <div class="all"><input type="checkbox" /><span>全选</span></div>
        <a href="JavaScript:;">删除商品</a>
        <div class="emp"></div>
        <span>共 33 件</span>
        <span>已选择 33 件</span>
        <span>合计：<em>￥99</em></span>
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
      relevant: undefined,
      flag: false,
      visible: false,
      dispflag: false
    }
  },
  components: {
    GoodsRe
  },
  methods: {
    hide(e) {
      let target = document.querySelector('.cart .wrapper .goods .item .goodsmsg .right .sku .selected')
      if (!target) return
      console.log(getAllDescendants(target))
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
        this.visible = false
        this.dispflag = false
      }
    }
  },
  async created() {
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
  }
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
