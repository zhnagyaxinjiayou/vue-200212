<template>
  <div>
    <button @click="count++">点击的{{ title }}{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["title"],
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="less" scoped></style>
