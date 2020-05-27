<template>
  <div>
    <h2>这个文章标题是{{ title }}</h2>
    <!-- 3.使用组件 -->
    <MyButton :title="title"></MyButton>
  </div>
</template>

<script>
// 1.引入组件
import MyButton from "./MyButton";
// import MyButton from './MyButton';

export default {
  // 组件间通信，只能父传子，声明接收属性
  props: ["title"],
  // 2.注册组件
  components: {
    MyButton,
  },
};
</script>

<style lang="less" scoped></style>
