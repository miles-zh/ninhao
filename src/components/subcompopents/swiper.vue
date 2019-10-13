<template>
    <div>
        <mt-swipe :auto="4000">
                <!-- 在组件使用v-for循环一定要加key属性 -->
                <!-- 将来谁用这个轮播图组件，谁为我们传递lunbotuList -->
                <!-- 此轮播图应该是父组件向子组件传值来设置 -->
                <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                    <img :src="item.url" :class="{full:isfull}">    
                </mt-swipe-item> -->
                <mt-swipe-item>
                        <img src="https://gd3.alicdn.com/imgextra/i3/2200714867780/O1CN017lSdNP27LHup6oFZH_!!2200714867780.jpg">    
                </mt-swipe-item>
                <mt-swipe-item>
                        <img src="https://gd3.alicdn.com/imgextra/i3/2200714867780/O1CN01yU5VbD27LHuoA33c7_!!2200714867780.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                        <img src="https://gd1.alicdn.com/imgextra/i1/2200714867780/O1CN01G3MKJz27LHunS6nix_!!2200714867780.jpg">
                </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default{

    // props:['lunbotuList','isfull'],
    data () {
        return {
            lunbotuList : []  // 轮播图数组
        }
    },
    created () {
        // this.getLunbotu()
    },
    methods: {
        // 获取轮播图的方法
        // getLunbotu () {
        //       // this.$http.get('api/getLunbo',true)
        //     this.$http.get('http://vue.studyit.io/api/getLunbo',true).then(result => {
        //         // console.log(result.body)
        //         if (result.status === 0) {
        //             Toast('获取加载轮播图失败！！')
        //             // this.lunbotuList = body.message;
        //         }else{
        //             Toast('获取加载轮播图失败！！')
        //         }
        //     })
        // }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height : 200px;

        .mint-swipe-item {
            text-align: center;
            img {
                height : 100%;
            }
        }
    }

    .full{
        width:100%;
    }
</style>