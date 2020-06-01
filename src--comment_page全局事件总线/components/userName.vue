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

<script type="text/ecmascript-6">
export default {
    data(){
        return{
            username:'',
            content:''
        }
    },
    methods: {
        addC(obj){
            // 收集信息
            let username=this.username
            let content=this.content
            let id=Date.now()
            // 将信息组装成对象
            obj={
                username,
                content,
                id
            }
            // 将对象放入数组
            // this.$emit('addComment',obj)
            this.$bus.$emit('addComment',obj)
            this.username=''
            this.content=''
        }
        
    },
 
}
</script>

<style scoped>


</style>
