<template>
  <div>
    <MyBlog v-for="blog in blogs" :key="blog.id" :title="blog.title"></MyBlog>
   <!-- <p></p> -->
  </div>
</template>

<script>
// import MyBlog from "./components/MyBlog";
// import MyBlog from './components/MyBlog';
import MyBlog from './components/MyButton'
export default {
  components: {
    MyBlog,
  },
  data() {
    return {
      blogs: [
        { id: 1, title: "bulogOne" },
        { id: 2, title: "bulogTwo" },
        { id: 3, title: "bulogThree" },
      ],
    };
  },

};
</script>

<style lang="less" scoped></style>
