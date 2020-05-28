<template>
 <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="cotent"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
  // props:['addComment'],//props方式
  data(){
    return{
      username:'',
      cotent:"",

    }
  },
  methods: {
    addC(){
      // 整理添加的数据
      let username=this.username;
      let cotent=this.cotent;
      let id=Date.now();
      // 将添加的数据放在数组的前边
      if(username.trim() && cotent.trim()){
        let obj={
           username,
          cotent,
          id
        }
        // this.addComment(obj)//props方式
        // 自定义事件
        this.$emit('addComment',obj)
      }
      this.username=''
      this.cotent=''
    }
  },
  
}
</script>

<style scoped>


</style>
