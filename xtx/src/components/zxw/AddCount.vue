<template>
  <div>
    <p @click="count++">{{ count }}</p>
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
