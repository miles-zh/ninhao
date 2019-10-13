<template>
    <div>
        

        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
                <!-- 在组件使用v-for循环一定要加key属性 -->
                <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                    <img :src="item.url">    dddddda
                </mt-swipe-item> -->
                <mt-swipe-item>
                        <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1568095907&di=31d23ac6e44a58b86748b878f51f2ada&src=http://s9.rr.itc.cn/r/wapChange/20165_9_23/a3uaw742475830023596.jpg">    
                </mt-swipe-item>
                <mt-swipe-item>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2703154339,2499129246&fm=26&gp=0.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=421187847,1054395290&fm=26&gp=0.jpg">
                </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格到六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/newslist">
                        <img src="../../images/menu1.png" />
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/photolist">
                        <img src="../../images/menu2.png" />
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/home/goodslist">
                        <img src="../../images/menu3.png" />
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <img src="../../images/menu4.png" />
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <img src="../../images/menu5.png" />
                        <div class="mui-media-body">视频专区</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <img src="../../images/menu6.png" />
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
               
            </ul> 

    </div>

</template>

<script>
    import { Toast } from 'mint-ui'

    export default {
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
            &:nth-child(1) {
                background-color:#f40;
            }
            &:nth-child(2) {
                background-color:#890;
            }
            &:nth-child(3) {
                background-color:#649;
            }
            img {
                width : 100%;
                height : 100%;
            }
        }
    }

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;

        img {
            width:60px;
            height:60px;
        }
        .mui-media-body{
            font-size:13px
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }


</style>;