<template>
  <div class="List-container" @pointerleave="pointer_out">
    <div class="List">
      <ul class="ul-list" v-for="item in data" :key="item.id">
        <li class="li-list" :listId="item.id"  @pointerenter="pointer_in">
          <!---@pointerenter="pointer_in" @pointerleave="pointer_out"-->
          <a :href="item.href">{{ item.title }}</a>
          <a :href="item.href">{{ item.litter_title1 }}</a>
          <a :href="item.href">{{ item.litter_title2 }}</a>
        </li>
      </ul>
    </div>
    <div class="ListAll" ref="show">
      <h4>
        热门推荐
        <span>asdasdasdsa</span>
      </h4>
      <ul v-for="item in 5" :key="item.id">
        <li class="test">wahh</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['listId'],
  data() {
    return {
      data: [
        {
          num: { 花: '水仙花', 草: '兰草', 树: '大树' },
          id: 1,
          title: '居家',
          litter_title1: '茶咖',
          litter_title2: '茶咖',
          href: 'javaScript:;'
        },
        { num: {}, id: 2, title: '美食', litter_title1: '黑猪', litter_title2: '黑猪', href: 'javaScript:;' },
        { num: {}, id: 3, title: '服饰', litter_title1: '拖鞋', litter_title2: '拖鞋', href: 'javaScript:;' },
        { num: {}, id: 4, title: '母婴', litter_title1: 'T恤', litter_title2: '居家', href: 'javaScript:;' },
        { num: {}, id: 5, title: '个护', litter_title1: '清洁', litter_title2: '居家', href: 'javaScript:;' },
        { num: {}, id: 6, title: '严选', litter_title1: '卫浴用品', litter_title2: '居家', href: 'javaScript:;' },
        { num: {}, id: 7, title: '数码', litter_title1: '影音', litter_title2: '居家', href: 'javaScript:;' },
        { num: {}, id: 8, title: '运动', litter_title1: '登机箱', litter_title2: '居家', href: 'javaScript:;' },
        { num: {}, id: 9, title: '杂项', litter_title1: '乐器杂项', litter_title2: '居家', href: 'javaScript:;' },
        { num: {}, id: 10, title: '杂项', litter_title1: '乐器杂项', litter_title2: '居家', href: 'javaScript:;' }
      ]
    }
  },
  methods: {
    pointer_in(e) {
      this.$refs.show.style.display = 'block'
      console.log(e.target.getAttribute('listId'))
    },
    pointer_out() {
      this.$refs.show.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.List-container {
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
        padding: 0px 20px;
        width: 250px;
        height: 50px;
        line-height: 50px;
        transition: all 0.5s;
        &:hover {
          background-color: #27ba9b;
          padding: 0px 25px;
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
  .list_active {
    background-color: red !important;
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
    .test {
      width: 200px;
      height: 50px;
      background-clip: pink;
    }
  }
}
</style>
