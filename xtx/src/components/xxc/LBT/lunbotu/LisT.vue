<template>
  <div class="List-container" @pointerleave="pointer_out">
    <div class="List">
      <ul class="ul-list">
        <li class="li-list" v-for="(item, index) in data" :key="item.id" :indexLs="index" @pointerenter="pointer_in">
          <!---@pointerenter="pointer_in" @pointerleave="pointer_out"-->
          <a :href="item.href">{{ item.name }}</a>
          <a :href="item.href">{{ item.children[0].name }}</a>
          <a v-if="item.children[1] !== undefined" :href="item.href">{{ item.children[1].name }}</a>
        </li>
      </ul>
    </div>
    <div class="ListAll" ref="show">
      <h4>
        热门推荐
        <span>asdasdasdsa</span>
      </h4>
      <ul class="ul-goods" >
        <li class="li-goods" v-for="item in list" :key="item.id">
          <a href="">
            <img :src="item.picture" alt="" />
            <div></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from '../../../../eventBus'
export default {
  props: ['indexLs'],
  data() {
    return {
      data: [],
      list: []
    }
  },
  methods: {
    pointer_in(e) {
      // console.log(this.data)
      this.$refs.show.style.display = 'block'
      this.list = this.data[e.target.getAttribute('indexLs')].goods
      console.log(this.list)
    },
    pointer_out() {
      this.$refs.show.style.display = 'none'
    }
  },
  created() {
    bus.on('getValue', result => {
      this.data = result
    })
  }
}
</script>

<style lang="scss" scoped>
.List-container {
  position: absolute;
  top: 0;
  width: 1240px;
  height: 500px;
  .List {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 500px;
    background-color: rgba($color: #141516, $alpha: 0.8);
    .ul-list {
      .li-list {
        padding: 0px 15px;
        width: 250px;
        height: 50px;
        line-height: 50px;
        transition: all 0.5s;
        &:hover {
          background-color: #27ba9b;
          padding: 0px 20px;
        }
        a {
          padding-left: 8px;
          color: #ffffff;
          font-size: 14px;
          &:first-child {
            font-size: 16px;
          }
        }
      }
    }
  }
  .ListAll {
    position: absolute;
    top: 0px;
    left: 250px;
    width: 990px;
    height: 500px;
    padding: 0 15px;
    background-color: hsla(0, 0%, 100%, 0.8);
    display: none;
    h4 {
      font-size: 20px;
      font-weight: 400;
      line-height: 80px;
    }
    .ul-goods {
      display: flex;
      flex-wrap: wrap;
      .li-goods {
        width: 310px;
        height: 120px;
        margin-right: 10px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          img {
            width: 95px;
            height: 95px;
          }
        }
      }
    }
  }
}
</style>
