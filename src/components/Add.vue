<template>
    <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
export default {
  // props:['addComment'], //通过props传递数据需要
  data(){
   return{
      username:"",
      content:""
   }
  },
  methods: {
    addC(){
      // 1.根据收集的数据创建一个对象
      let username=this.username;
      let content=this.content;
      let id=Date.now();
      // 2.将收集的对象添加到components数组的前边
      // 判断收集的数据是否合格
      if(content.trim() && username.trim()){
       let obj={
          content,
          username,
        id
       }
      // 在子组件不能修改父组件的数据，不能在这里动components，必须使用App当中对应的方法操作
      // this.addComment(obj); //props传递数据的方法
      this.$emit('addComment',obj)
      }
     this.username="",
     this.content=""
    }
  },
}
</script>

<style scoped>

</style>
