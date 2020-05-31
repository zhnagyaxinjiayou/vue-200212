<template>
  <div class="row">
      <h2 v-if='isFirst'>初次见面请关照</h2>
      <h2 v-else-if="isLoding">正在加载，请稍等……</h2>
      <h2 v-else-if="errMag">请求出错{{errMag}},请重新发送请求</h2>

      <div v-else class="card" v-for="user in users" :key="user.user_name">
        <a :href="user.user_url" target="_blank">
          <img :src="user.user_img" style="width: 100px"/>
        </a>
        <p class="card-text">{{user.user_name}}</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource)
// console.log(Vue)
export default {
    mounted() {
        this.$bus.$on('searchAjax',this.searchAjax)
    },
    data(){
        return{
            isFirst:true,//看是不是第一次显示页面
            isLoding:false,//证明是否在发请求
            errMag:'',//请求出错后保存信息
            users:[]//请求成功后需要保存的信息
        }
    },
    methods: {
        // 使用axios的使用
        // searchAjax(searName){
        //     // 发送ajax请求是切换成正在发送请求的页面
        //     this.isFirst=false;
        //     this.isLoding=true;
        //     axios({
        //         url:'https://api.github.com/search/users',
        //         method:'GET',
        //         params:{
        //             q:searName
        //         }
        //     }).then(response=>{
        //         // 如果请求成功，我们需要把成功的数据进行过滤，填充到数组中
        //         // console.log(response.data)
        //         this.isLoding=false
        //         // item第一条信息就是一个用户信息，是对象信息
        //         response.data.item.forEach(item=>{
        //             // 从每个获取到的数据当中过滤我要的数据
        //             // 用户名
        //             let user_name=item.login
        //             // 头像
        //             let user_img=item.avatar_url
        //             // 地址
        //             let user_url=item.url

        //             // 把我要的数据组装成一个对象
        //             let obj={
        //                 user_name,
        //                 user_img,
        //                 user_url
        //             }
        //             // 把数据对象放在我们的对象中
        //             this.users.push(obj)

        //         })

        //     }).catch(error=>{
        //         // 如果请求失败显示出来请求失败的页面
        //         this.errMag=error.message
        //         this.isLoding=false
        //     })
        // }

        // axios和async await的使用

        // async searchAjax(searName){
        //     // 发送请求的时候将页面切换成发送请求的页面
        //     this.isFirst=false;
        //     this.isLoding=true;
        //   try{
        //        let response =await axios({
        //            url:'http://localhost:4000/user/info',
        //            method:'GET',
        //            params:{
        //                q:searName
        //            }
        //     })
        //     this.isLoding=false;
        //     // items第一条信息就是一个用户信息，是一个对象
        //     response.data.item.forEach(item=>{
        //         // 从每个获取到的获取过滤我要的数据
        //          let user_name = item.login
        //         let user_img = item.avatar_url
        //         let user_url = item.url
        //         // 将我要的数据组装成一个对象
        //         let obj={
        //             user_name,
        //             user_img,
        //             user_url
        //         }
        //         // 将要的数据放在我们的数组中
        //         this.users.push(obj)
        //     })
        //   }catch(error){
        //       this.isLoding=false
        //       this.errMag=error.message//axios中的错误信息是message

        //   }
        // }
        // vue-resource使用
         searchAjax(searName){
            this.isFirst=false;
            this.isLoding=true;
            this.$http({
                // 发送请求的地址
                url:'https://api.github.com/search/users',
                method:'GET',
                params:{
                    q:searName
                }
            }).then(response=>{
                // 如果请求成功了
                this.isLoding=false
                // itmes第一条信息就是一个用户名，是一个对象
                response.data.items.forEach(item=>{
                    let user_name=item.login
                    let user_img=item.avatar_url
                    let user_url=item.url
                    // 把过滤需要的数据组装成一个对象
                    obj={
                        user_name,
                        user_img,
                        user_url
                    }
                    // 把组装成的对象放到我们的数组里
                    this.users.push(obj)
                })
            }).catch(error=>{
                this.isLoding=false,
                this.errMag=error.statusText
            })
             

     }
    }
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}


</style>
