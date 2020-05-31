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
import Axios from 'axios'
export default {
  mounted() {
    this.$bus.$on('saerAjax',this.saerAjax)
  },
  data(){
    return{
      isFlor:true,//确定次否
      ifLoding:false,//确定是否加载
      errMag:'',//保存错误的数据
      users:[]//保存成功的数据
    }
  },
  methods: {
    // 使用Axios方式
  //   saerAjax(searName){
  //     // 发送请求切换页面
  //     this.isFlor=false
  //     this.ifLoding=true
  //     Axios({
  //       url:'https://api.github.com/search/users',
  //       method:'GET',
  //       params:{
  //         p:searName
  //       }
  //     }).then(response=>{
  //       // // 发送成功、
  //       this.ifLoding=false
  //       // // 遍历成功的数据
  //       response.data.item.forEach(item=>{
  //         // 从每个获取到的数据当中过滤我要的数据
  //           // 用户名
  //           let user_name=item.login
  //           // 头像
  //           let user_img=item.avatar_url
  //           // 地址
  //           let user_url=item.url
            
  //           // 将 需要的数据整理成对象
  //           obj={
  //             user_name,
  //             user_img,
  //             user_url
  //           }
  //           // 将数据放入数组中
  //           this.users.push(obj)
  //       })
  //     }).catch(error=>{
  //       // 发送失败，捕获失败数据
  //       this.ifLoding=false
  //       let errMag=error.message
  //     })
  //   }
  // axios和async await的使用

    async saerAjax(searName){
      this.isFlor=false
      this.ifLoding=true
       try{
         let response=await axios({
            url:'https://api.github.com/search/users',
            method:'GET',
            params:{
              p:searName
            }
         })
          // 发送成功、
        this.ifLoding=false
        // // 遍历成功的数据
        response.data.item.forEach(item=>{
          // 从每个获取到的数据当中过滤我要的数据
            // 用户名
            let user_name=item.login
            // 头像
            let user_img=item.avatar_url
            // 地址
            let user_url=item.url
            
            // 将 需要的数据整理成对象
            obj={
              user_name,
              user_img,
              user_url
            }
            // 将数据放入数组中
            this.users.push(obj)

       })
       
       }catch(error){
         this.ifLoding=false
        this.errMag=error.message

       }
     }

    }

}
</script>

<style scoped>


</style>
