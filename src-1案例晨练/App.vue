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
     <List/>
     <addname/>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import addname from '@/components/addname'
import List from '@/components/List'
export default {
  components:{
    addname,
    List
  }
}
</script>

<style scoped>


</style>
