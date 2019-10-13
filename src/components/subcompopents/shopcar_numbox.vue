<template>
    <div>

       
        <div class="mui-numbox" data-numbox-min='1' style="height:25px">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>

    </div>
</template>




<script>

import mui from '../../lib/mui/js/mui.min.js'
export default {
    
    methods:{
        countChanged(){
           // 购物车数据改变了
           //    console.log(this.$refs.numbox.value)
            // 每当数量值改变，立即将最新的数量值同步到购物车的store中，覆盖之前的数量值
        this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:this.$refs.numbox.value})

        }
    },
    mounted(){
        // 初始化数字选择框
        mui(".mui-numbox").numbox()
    },
    props:["initcount","goodsid"]
}
</script>

<style lang="scss" scoped>
    
</style>