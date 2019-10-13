<template>
    <div>

        <!-- 我们不知道什么时候获取到max值，我们会在某一刻获取到max值 -->
        <!-- 我们可以使用watch属性监听父组件传递过来的max值，不管watch被触发几次，但是最后一次，肯定得到一个合法的max -->
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>

        <!-- 子组件什么时候把数据传递给父组件 -->



    </div>
</template>




<script>

import mui from '../../lib/mui/js/mui.min.js'
export default {
    
    methods:{
        countChanged(){
            // 每当文本框的数据变动时，立即把最新的数据通过事件调用，把数据传递给父组件
            // console.log(this.$refs.numbox.value);
            this.$emit('getcount',parseInt(this.$refs.numbox.value))

        }
    },
    props:['max'],
    watch:{

        // 使用jsAPI设置numbox的最大值
        'max':function(newVal,oldVal){
                mui(".mui-numbox").numbox().setOption('max',newVal);
        }
    },
    mounted(){
        // 初始化数字选择框
        mui(".mui-numbox").numbox()
    }
}
</script>

<style lang="scss" scoped>
    
</style>