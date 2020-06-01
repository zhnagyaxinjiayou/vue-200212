<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
     <!-- <userName @addComment='addComment'></userName> -->
     <userName></userName>
     <List :comment='comment'></List>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import List from '@/components/List'
import userName from '@/components/userName'

export default {
     mounted(){
        //  全局事件总线
         this.$bus.$on('addComment',this.addComment)
         this.$bus.$on('deleteComment',this.deleteComment)
     },
       data(){
        return{
            comment:[
                {id:1,username:'杨幂',content:'vue很棒'},
                {id:2,username:'杨紫',content:'vue优秀'},
                {id:3,username:'杨洋',content:'vue帅气'},

            ]
        }
    },
    methods: {
        addComment(obj){
            this.comment.unshift(obj)
        },
        deleteComment(index){
            this.comment.splice(index,1)

        }
    },
    components:{
        List,
        userName
    }
}
</script>

<style scoped>


</style>
