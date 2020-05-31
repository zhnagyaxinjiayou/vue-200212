<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <Listtop  v-for="comment in comments" :key="comment.id"   :comment='comment' :deleteComment='deleteComment'/>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import Listtop from '@/compobebts/Listtop';
export default {
    props:['comments','deleteComment'],
    components:{
        Listtop,
    }
}
</script>

<style scoped>
.reply {
  margin-top: 0px;
}

</style>
