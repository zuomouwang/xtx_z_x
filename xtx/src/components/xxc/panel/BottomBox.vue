<template>
  <div class="boBox-container">
    <ul v-if="!status" v-load="status">
      <li v-load="status">
        <img v-load="status" />
        <div v-load="status" class="l"></div>
        <div v-load="status" class="s"></div>
      </li>
      <li v-load="status">
        <img v-load="status" />
        <div v-load="status" class="l"></div>
        <div v-load="status" class="s"></div>
      </li>
      <li v-load="status">
        <img v-load="status" />
        <div v-load="status" class="l"></div>
        <div v-load="status" class="s"></div>
      </li>
      <li v-load="status">
        <img v-load="status" />
        <div v-load="status" class="l"></div>
        <div v-load="status" class="s"></div>
      </li>
    </ul>
    <ul v-if="status">
      <li>
        <a href="">
          <img :src="data[0].picture" alt="" />
          <p class="meg">{{ data[0].name }}]</p>
          <p>
            <i>¥</i><span>{{ data[0].price }}</span>
          </p></a
        >
      </li>
      <li>
        <img :src="data[1].picture" alt="" />
        <p class="meg">{{ data[1].name }}</p>
        <p>
          <i>¥</i><span>{{ data[1].price }}</span>
        </p>
      </li>
      <li>
        <img :src="data[2].picture" alt="" />
        <p class="meg">{{ data[2].name }}</p>
        <p>
          <i>¥</i><span>{{ data[2].price }}</span>
        </p>
      </li>
      <li>
        <img :src="data[3].picture" alt="" />
        <p class="meg">{{ data[3].name }}</p>
        <p>
          <i>¥</i><span>{{ data[3].price }}</span>
        </p>
      </li>
    </ul>
    <!-- <ul v-if="status">
      <li v-for="item in data" :key="item.id">
        <img :src="item.picture" alt="" />
        <p></p>
        <p></p>
      </li>
      <li v-load="status">
        <img :src="data[3].picture" alt="" />
        <p></p>
        <p><i>¥</i><span></span></p>
      </li>
      </ul> -->
  </div>
</template>

<script>
export default {
  props: ['data', 'status'],
  data() {
    return {}
  },
  // mounted() {
  //   console.log(this.data)
  // },
  updated() {
    console.log(this.data[0])
  }
}
</script>

<style lang="less" scoped>
.boBox-container {
  ul {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 1240px;
    overflow: hidden;
    li {
      position: relative;
      text-align: center;
      width: 306px;
      height: 406px;
      background: #f0f9f4;
      transition: all 0.5s;
      .l {
        position: absolute;
        top: 320px;
        left: 50%;
        transform: translateX(-50%);
        width: 160px;
        height: 35px;
        border-radius: 6px;
      }
      .s {
        position: absolute;
        top: 365px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 30px;
        border-radius: 6px;
      }
      img {
        width: 306px;
        height: 306px;
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
        // background-color: #f7f7f7; /* 添加默认背景色 */
        // object-fit: cover;
      }

      p {
        font-size: 22px;
        padding: 12px 30px 0 30px;
        text-align: center;
      }
      .meg {
        font-size: 22px;
        padding: 12px 30px 0 30px;
        text-align: center;
        overflow: hidden; /* 将超出宽度的内容隐藏 */
        text-overflow: ellipsis; /* 将截断的文本以省略号表示 */
        white-space: nowrap; /* 防止文本换行 */
      }
    }
  }
}
</style>
