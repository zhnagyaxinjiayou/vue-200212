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
     <!-- <userName :addComment='addComment'/> props的方法-->
     <!-- <userName ref='add'/> 自定义事件本质-->
     <!-- 自定义事件简写方式 -->
     <userName @addComment='addComment'/>
     <List  :comments='comments' :deleteComment='deleteComment'/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import userName from '@/compobebts/userName';
import List from '@/compobebts/List';
export default {
    // mounted() {
    //     this.$refs.add.$on('addComment',this.addComment)
    // },
    data(){
        return{
            comments:[
                {id:1,username:'郭德纲',cotent:'vue好样的'},
                {id:2,username:'小岳岳',cotent:'vue老优秀了'},
                {id:3,username:'小沈阳',cotent:'vue太香啦'},
            ]

        }
    },
   methods:{
      addComment(obj){
        //   往comments头部去添加
           this.comments.unshift(obj)
      },
      deleteComment(index){
          this.comments.splice(index,1)
      }

   },
    components:{
        userName,
        List
    }
}
</script>

<style scoped>


</style>
