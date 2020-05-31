<template>
<div>
    <!-- <Chlid> -->
        <!-- 父传子 -->
        <!-- 给默认插糟使用 -->
        <!-- <template>
            <!-- <h2>哈哈哈</h2> -->
            <!-- <span>嘿嘿</span>
        </template>  -->
        <!-- 如果template里面只有一个标签可以简写 -->
        <!-- <p slot="bb">我是父组件使用具名插糟</p> -->

        <!-- 作用域插糟是依赖父组件决定子组件的展现 -->
        <!-- <span slot-scope="slotProps" v-show="isShow" slot="ss">
            !{{slotProps.perspn.name}}
        </span> -->
       
    <!-- </Chlid> -->
   <template>
       <Chlid>
        <p>啦啦啦，我是父组件传递的内容，会覆盖匿名插糟里面的内容</p>
        <h1 slot="aa">哈哈哈 ，我覆盖了具名插槽里的内容</h1>

       <p slot-scope="aaaa" slot="bb" v-show="isShow">
           !{{aaaa.person.name}}
       </p>
         <!-- <span slot-scope="slotProps" v-show="isShow" slot="uu">
            √{{slotProps.person.name}}
        </span> -->

    </Chlid>
   </template>
   <template>
        <Chlid1>
            <p>啦啦啦</p>
            <p slot="aaa">父组件具名</p>
            <span slot-scope="aaaa" slot='qq' v-show="isShow">
                !{{aaaa.arrs.name}}
            </span>
        </Chlid1>      

   </template>

</div>
</template>

<script type="text/ecmascript-6">
import Chlid from '@/components/Chlid';
import Chlid1 from '@/components/Chlid1'
export default {
   
    data(){
        return{
            isShow:true

        }
    },
    components:{
        Chlid,
        Chlid1
    }
}
</script>

<style scoped>


</style>
