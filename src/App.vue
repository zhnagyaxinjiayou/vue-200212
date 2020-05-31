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
     <userName></userName>
     <List></List>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import List from '@/components/List'
import userName from '@/components/userName'

export default {
    components:{
        List,
        userName
    }
}
</script>

<style scoped>


</style>
