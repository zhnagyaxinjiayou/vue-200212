<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <Import></Import>
     <List :comments='comments'></List>
     <Bottom></Bottom>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Import from "@/components/Import"
import Bottom from "@/components/Bottom"
import List from '@/components/List'
export default {
    
    data(){
        return{
            comments:[
                {id:1,name:'吃饭',isOver:false},
                {id:2,name:'睡觉',isOver:true},
                {id:3,name:'打豆豆',isOver:false},

            ]
        }
    },
    methods: {
      
        addComments(obj){
            this.comments.unshift(obj)
        }
    },
    components:{
        Import,
        Bottom,
        List
    }

}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>
