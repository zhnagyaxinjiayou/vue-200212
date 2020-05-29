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
     <addname :addComments='addComments'/>
       <List :comments='comments' :deleteComments='deleteComments'/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import addname from '@/components/addname';
import List from '@/components/List';

export default {
    data(){
        return{
            comments:[
                {id:1,username:'杨幂',conten:'vue超棒'},
                {id:2,username:'热巴',conten:'vue超赞'},
                {id:3,username:'杨紫',conten:'vue超萌'},
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
        addname,
        List
    }
}
</script>

<style scoped>


</style>
