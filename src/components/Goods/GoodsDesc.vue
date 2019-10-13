<template>
    <div class="goodsdesc-container">

        <!-- 从后台获取数据 -->
        <!-- <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content">
            
        </div> -->

        <h3>新款夏季短袖工作服按摩SPA美容院套装时尚高端沐足浴工衣技师服</h3>
        <hr>
        <div class="content">
            <img src="https://img.alicdn.com/imgextra/i1/2200714867780/O1CN01PYNPzt27LHup94h97_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/2200714867780/O1CN01cax45X27LHuqYhI7a_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i1/2200714867780/O1CN01hadNYu27LHuqYilai_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i2/2200714867780/O1CN01ZFDatQ27LHuov6O0x_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i2/2200714867780/O1CN01oKo6O127LHumYoVS7_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/2200714867780/O1CN01OEW7wz27LHuphp6uz_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i4/2200714867780/O1CN01j5NYXJ27LHuo4rLUG_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i4/2200714867780/O1CN01FUiOzv27LHuqM83ea_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i4/2200714867780/O1CN0117UCvU27LHuqYhUcZ_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i4/2200714867780/O1CN01Uledgi27LHuo4s9Mz_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/2200714867780/O1CN01CqTIAi27LHuo3W5VT_!!2200714867780.jpg" alt="">
            <img src="https://img.alicdn.com/imgextra/i3/2200714867780/O1CN01rGxe7b27LHunkvOk3_!!2200714867780.jpg" alt="">
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return {
            info:[]  // 图文数据
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods:{
        getGoodsDesc(){
            this.$http.get('api/goods/getdesc'+this.$route.params.id).then(result=>{
                if(result.body.status===0){
                    this.info=result.body.message[0];
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .goodsdesc-container{
        padding:4px;
        h3{
            font-size:16px;
            color:#226aff;
            text-align:center;
            margin:15px 0;
        }
        .content{
            img{
                width:100%;
            }
        }
    }
</style>