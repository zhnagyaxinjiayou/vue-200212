<template>
  <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
        <ListTop v-for="(comment, index) in comments" :key="comment.id" :comment='comment' :deleteComments='deleteComments'/>
          
        </ul>
   </div>
</template>

<script type="text/ecmascript-6">
import ListTop from '@/components/ListTop';
export default {
    props:['comments','deleteComments'],
    components:{
        ListTop,
    }
}
</script>

<style scoped>
.reply {
  margin-top: 0px;
}

</style>
