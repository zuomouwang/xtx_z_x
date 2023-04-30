<template>
  <div class="top">
    <div class="wrapper">
      <ul>
        <li v-for="(i, index) in data" :key="index">
          <a :href="i.href">{{ i.title }}</a>
        </li>
        <li>
          <a href="javaScript:;">
            <el-icon><Iphone /></el-icon>
            手机版
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { title: '请先登录', href: 'javaScript:;' },
        { title: '免费注册', href: 'javaScript:;' },
        { title: '我的订单', href: 'javaScript:;' },
        { title: '会员中心', href: 'javaScript:;' },
        { title: '帮助中心', href: 'javaScript:;' },
        { title: '在线客服', href: 'javaScript:;' }
      ]
    }
  },
  props: {
    userName: {
      default: '请先登录'
    }
  },
  created() {
    if (this.userName !== '请先登录') {
      this.data[0].title = this.userName
      this.data[1].title = '退出登录'
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  background-color: #333;
  width: 100%;
  .wrapper {
    height: 50px;
    position: relative;
    ul {
      display: flex;
      height: 100%;
      position: absolute;
      right: 0;
      align-items: center;
      li {
        a {
          padding-left: 10px;
          padding-right: 10px;
          border-right: 1px solid #dcdcdc;
          color: #dcdcdc;
          font-size: 14px;
        }
        a:hover {
          color: #27ba9b;
        }
      }
      li:last-child {
        a {
          display: flex;
          align-items: center;
          border-right: 0px solid #dcdcdc;
          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>
