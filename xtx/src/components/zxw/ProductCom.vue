<template>
  <div class="product">
    <div class="wrapper">
      <div class="top">
        <h1>{{ data.name }}</h1>
        <div class="right">
          <ul>
            <li v-for="i in data.children" :key="i.id">
              <a href="javascript:;">{{ i.name }}</a>
            </li>
          </ul>
          <a href="javascript:;" class="click">
            <span>查看全部</span><el-icon><ArrowRight /></el-icon>
          </a>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <a href="javascript:;">
            <img :src="data.picture" :alt="data.name" />
          </a>
        </div>
        <div class="right">
          <ul>
            <li v-for="i in data.goods" :key="i.id">
              <div class="goods">
                <a href="javascript:;">
                  <img :src="i.picture" alt="" />
                </a>
                <p class="num1">{{ i.name }}</p>
                <p class="num2">{{ i.desc }}</p>
                <p class="price">￥{{ i.price }}</p>
                <div class="move">
                  <a href="javascript:;">
                    <span>找相似</span>
                    <span>发现更多宝贝 > </span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    data: {}
  }
}
</script>

<style lang="less" scoped>
.product {
  width: 100%;
  height: 720px;
  background-color: #fff;
  .wrapper {
    height: 100%;
    .top {
      width: 100%;
      height: 110px;
      // background-color: red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-weight: normal;
        cursor: default;
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul {
          display: flex;
          li {
            margin-right: 10px;
            a {
              padding: 3px;
              line-height: 13px;
            }
            a:hover {
              border-radius: 5px;
              background-color: var(--lv);
              color: #fff;
            }
          }
        }
        a.click {
          margin-left: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 610px;
      display: flex;
      .left {
        width: 240px;
        height: 100%;
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            object-fit: cover;
          }
        }
      }
      .right {
        width: 1000px;
        height: 100%;

        ul {
          width: 1000px;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: space-evenly;

          li {
            // border: 1px solid var(--lv);
            border: 1px solid transparent;
            display: block;
            width: 240px;
            height: 300px;
            background-color: #fff;
            transition: all 0.3s;
            .goods {
              position: relative;
              padding: 28px;
              width: 100%;
              height: 100%;
              overflow: hidden;
              a {
                margin: 0 auto;
                display: block;
                width: 160px;
                height: 160px;
                // background-color: red;
              }
              p {
                overflow: hidden;
                cursor: default;
              }
              .num1 {
                margin-top: 3px;
                height: 50px;
              }
              .num2 {
                height: 20px;
                color: #999;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 3px 0;
              }
              .price {
                height: 30px;
                color: #cf4444;
                font-size: 20px;
              }
              .move {
                position: absolute;
                height: 86px;
                width: 100%;
                left: 0;
                bottom: -86px;
                background-color: var(--lv);
                transition: all 0.3s;
                cursor: pointer;
                a {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                  span {
                    color: #fff;
                  }
                  span:first-child {
                    text-align: center;
                    padding: 10px;
                    display: block;
                    width: 100px;
                    border-bottom: 1px solid #fff;
                  }
                  span:last-child {
                    display: block;
                    margin-top: 5px;
                  }
                }
              }
            }
          }
          li:hover {
            border: 1px solid var(--lv);
          }
          li:hover .move {
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
