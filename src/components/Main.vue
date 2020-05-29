<template>
  <ul class="todo-main">
        <Item v-for="(todo,index) in todos" :key="todo.id" :todo='todo' :index='index' :updataOne='updataOne' :deleteOne='deleteOne'></Item>
  </ul>
      
    
     
</template>

<script type="text/ecmascript-6">
import Item from '@/components/Item'
export default {
    // props:['todos'],//第一种写法，无法判断数据类型,没有规定类型，接收数据类型不明确
    props:{//标明接收类型
        todos:Array,
        updataOne:Function,
        deleteOne:Function
    },
    components:{
        Item
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>
