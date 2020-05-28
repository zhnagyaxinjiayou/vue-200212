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
     <!-- <addName :addComments='addComments'/> -->
     <!-- 自定义事件，组件间通信 -->
     <addName @addComments='addComments'/>
     <!-- <List :comments='comments' :deleteComments='deleteComments'/> -->
     <List :comments='comments' :deleteComments='deleteComments'/>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import List from "@/components/List";
import addName from '@/components/addName';
export default {
    data(){
        return{
            comments:[
                {id:1,username:'徐天赐',cotent:'vue好帅'},
                {id:2,username:'蒋亚欣',cotent:'vue好棒'},
                {id:3,username:'马跃',cotent:'vue好炫'}
            ]
        }

    },
    methods:{
        addComments(obj){
            this.comments.unshift(obj)
        },
        deleteComments(index){
            this.comments.splice(index,1)

        }
    },
    components:{
        List,
        addName
    }
}
</script>

<style scoped>


</style>
