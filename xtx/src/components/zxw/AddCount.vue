<template>
  <div>
    <p @click="count++">{{ count }}</p>
    <h1>wahah</h1>
    <h2>{{ count }}</h2>
    <h2>www</h2>
    <h3>wah</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  }
}
</script>

<style lang="less" scoped></style>
