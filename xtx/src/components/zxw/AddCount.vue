<template>
  <div>
    <p @click="count++">{{ count }}</p>
    <h1>wahah</h1>
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
