<template>
<div class="row">
    <h2 v-if='isFirst'>初次见面请多关照</h2>
    <h2 v-else-if="isLoading">发送请求中</h2>
    <h2 v-else-if="errMsg">请求出错{{errMsg}}.请重新发送</h2>
      <div v-else class="card" v-for="user in users" :key="user.user_name">
        <a :href="user.user_url" target="_blank">
          <img :src="user.user_img" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.user_name}}</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'//导入axios发送ajax请求
import VueResource from 'vue-resource'//这是一个插件，是vue官方的插件
import Vue from 'vue'
Vue.use(VueResource)//如果是插件就要安装拆件
console.dir(Vue)

export default {
    data(){
        return{
            isFirst:true,
            isLoading:false,
            errMsg:'',
            users:[]
        }
    },
     // 用来绑定事件 定时器 等等一些异步处理操作
    mounted() {
        this.$bus.$on('searchAjax',this.searchAjax)
    },
    
    methods: {

        searchAjax(searchname){
            this.isFirst=false
            this.isLoading=true
        //   this.$http({ vue-resource
          axios({
                url:'http://api.github.com/search/users',
                // url:' https://api.github.com/search/repositories',
                method:'GET',
                params:{
                    q:searchname,
                    // q:'v',
                    // sort:'stars'


                }
            })  .then(response=>{
                this.isLoading=false
                // console.log(response.data)
                // items第一条信息就是一个用户信息，是一个对象
                response.data.items.forEach(item=>{
                    // 从每个数据中获取我要的数据
                    let user_name=item.login
                    let user_img=item.avatar_url
                    let use_url=iten.url
                    // 把我要的数据组装成一个对象
                    let obj={
                        user_name,
                        user_img,
                        user_url
                    }
                    this.users.push(obj)

                })

            }).catch(error=>{
                this.errMsg=error.message
                this.isLoading=false
            })


        },
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