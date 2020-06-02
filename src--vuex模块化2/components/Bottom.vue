<template>
  <div class="row">
    <h2 v-if="isFlor">初次见面请多关照</h2>
    <h2 v-else-if="ifLoding">正在加载中，请您稍等……</h2>
    <h2 v-else-if="errMag">请求出错{{errMag}},请您重新发送请求</h2>

      <div v-else class="card" v-for="user in users" :key="user.user_name">
        <a :href="user.user_url" target="_blank">
          <img :src="user.user_img" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.user_name}}</p>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
 import {mapState,mapGetters} from 'vuex'
export default {
 computed:mapGetters(['isFlor','ifLoding','errMag','users'])
  
}
</script>

<style scoped>


</style>
