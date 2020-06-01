<template>
 <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <Item v-for="comments in comment" :key="comment.id" :comments='comments'></Item>
      </div>
</template>

<script type="text/ecmascript-6">
import Item from '@/components/Item'
export default {
    props:{
        comment:Array

    },
    components:{
        Item
    }
}
</script>

<style scoped>
.reply {
  margin-top: 0px;
}

</style>
