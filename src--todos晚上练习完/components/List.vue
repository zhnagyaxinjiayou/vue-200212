<template>
    <ul class="todo-main">
       <Item v-for="(comment, index) in comments" :key="comment.id" :comment='comment'></Item>
      </ul>
</template>

<script type="text/ecmascript-6">
import Item from '@/components/Item'
export default {
    props:{
        comments:Array

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
