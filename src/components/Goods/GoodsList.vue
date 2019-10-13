<template>
    <div class="goods-list">

        <!-- 从后台获取数据 -->
        <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'home/goodsinfo/'+item.id" tag='div'>
            <img :src="item.img_url">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">${{item.sell_price}}</span>
                    <span class="old">${{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link> -->


        <!-- 用router-link连接进行跳转 -->
        <router-link class="goods-item" to="/home/goodsinfo/1">
            <img src="https://gd3.alicdn.com/imgextra/i4/1977138523/O1CN012Cpa7ioEOIJLWuc_!!1977138523.jpg" alt="">
            <h1 class="title">宽松BF2019年春秋季重工刺绣火烈鸟水洗翻领显瘦时尚女牛仔外套</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$789</span>
                    <span class="old">$1289</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </router-link>


        <!-- 通过router的实列方法进行跳转 goDetail(item.id)-->
        <div class="goods-item" @click="goDetail(2)">
            <img src="https://gd4.alicdn.com/imgextra/i1/0/O1CN01Wh6pje29dj71UsICW_!!0-gaia.jpg" alt="">
            <h1 class="title">2019夏季新款时尚女装连衣裙韩版中长款女裙子</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$1789</span>
                    <span class="old">$3245</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="https://gd1.alicdn.com/imgextra/i4/0/O1CN01CjrRFz27LHuov6aWW_!!0-item_pic.jpg" alt="">
            <h1 class="title">新款夏季短袖工作服按摩SPA美容院套装时尚高端沐足浴工衣技师服</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$789</span>
                    <span class="old">$980</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        //  往自己组件内部挂在数据的
        return {
            pageindex:1,
            goodslist:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            // 获取商品列表
            this.$http.get('api/getgoodslist?pageindex='+this.pageindex).then(result=>{
                if(result.body.status === 0){
                    // this.goodslist=result.body.message;

                    // 点击加载更多，执行
                    this.goodslist=this.goodslist.concat(result.body.message);
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){
            // 使用js的形式进行路由导航   (编程式导航)

            // 注意;一定要区分this.router和this.route这两个对象，其中this.route是路由参数对象，所有路由中的参数 params query都属于他；
            // this.router是一个路由导航对象，用它可以方便的使用js代码实现路由的前进，后退，跳转到新的url地址
            console.log(this)
            // 1.最简单的
            // this.$router.push('/home/goodsinfo/'+id);
            // 2.传递对象
            // this.$router.push({'/home/goodsinfo'+id});
            // 3.传递命名的路由
            this.$router.push({name:'goodsinfo',params:{id}});
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display:flex;
        flex-wrap: wrap;
        padding:7px;
        justify-content: space-between;
        .goods-item{
            width:49%;
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding:2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
                min-height: 193px;
            }
            .title{
                font-size: 14px;
                color:#555;
            }
            .info{
                background-color: #eee;
                p{
                    margin:0;padding:5px
                }
                .price{
                    .now{
                        color:#f40;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>