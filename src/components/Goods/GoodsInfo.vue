<template>
    <div class="goodsinfo-container">

        <!-- 点击添加购物车，实现小球飞到购物车效果 -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        

        <!-- 商品轮播图区域 -->
       <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :isfull="false"></swiper>
                </div>
            </div>
        </div>

        <!-- <div class="mui-card">
            <swiper></swiper>
        </div> -->
    

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">新款夏季短袖工作服按摩SPA美容院套装时尚高端沐足浴工衣技师服</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>$987</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售价： <span class=now_price>$789</span>       
                        </p>
                        <p class="number">购买数量：<numbox style="display:inline-block" @getcount='getSelectedCount'></numbox></p> 
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                            <!-- 如何实现加入购物车时候，拿到选择的数量 -->
                            <!-- 1.经过分析，按钮属于goodsinfo页面，数字属于numberbox组件 -->
                            <!-- 2.由于涉及到父子组件的嵌套，所以无法直接在goodsinfo页面中获取到选中的商品数量值 -->
                            <!-- 3.解决问题，子组件向父组件传值了(事件调用机制) -->
                            <!-- 4.事件调用本质：父组件传递方法给子组件，子组件调用这个方法，把数据当作参数传递给父组件 -->

                        </p>
					</div>
				</div>
				
        </div>


        <!-- 从后台获取数据 -->
        <!-- <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>${{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价： <span class=now_price>${{goodsinfo.sell_price}}</span>       
                        </p>
                        <p>
                            购买数量：<numbox  style="display:inline-block" :max=goodsinfo.stock_quantity></numbox>
                        </p>
                        
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small">加入购物车</mt-button>
                        </p>
					</div>
				</div>
				
        </div> -->

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：87492070247</p>
                        <p>库存情况：30 件</p>
                        <p>上架时间：2019-09-09 </p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type='primary' size="large" plain @click="goDesc(1)">图文介绍</mt-button>
                    <mt-button type='danger' size="large" plain @click="goComment(1)">商品评论</mt-button>
                </div>
        </div>

        <!-- <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsinfo.goods_no}}</p>
                        <p>库存情况：{{goodsinfo.stock_quantity}} 件</p>
                        <p>上架时间：{{goodsinfo.add_item | dateFormat}} </p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type='primary' size="large" plain>图文介绍</mt-button>
                    <mt-button type='danger' size="large" plain>商品评论</mt-button>
                </div>
        </div> -->

    </div>
</template>

<script>

// 导入轮播图组件
import swiper from '../subcompopents/swiper.vue'


// 导入数字框组件
import numbox from '../subcompopents/goodsinfo_numbox.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,   //  将路由参数中id挂载到data上，方便使用
            lunbotu:[],   //  轮播图的数组
            goodsinfo:{},   //  获取到的商品的信息
            ballFlag:false,
            selectedCount:1
        }
    },
    created(){
        this.getLunbotu();
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status === 0){

                    //  先循环轮播图数组每一项为img添加img属性，应为轮播图组件中只认识item.img.,不认识item.src
                    result.body.message.forEach(item => {
                        item.img=item.src;
                    });

                    this.lunbotu = result.body.message;
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo'+this.id).then(result=>{
                if(result.body.status===0){
                    this.goodsinfo=result.body.message[0];
                }
            })
        },
        goDesc(id){
            // 点击使用编程式导航跳转到图文介绍页面
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goComment(id){
            // 点击使用编程式导航跳转到评论页面
            this.$router.push({name:'goodscomment',params:{id}})
        },
        addToShopCar(){
            this.ballFlag = !this.ballFlag;

            // 添加出一个要保持到store中car数组中的商品信息对象
            var goodsinfo={
                id:this.id,
                count:this.selectedCount,
                price:this.goodsinfo.sell_price,
                selected:true
                }

             //  调用store中的mutation来保存商品加入购物车   
            // this.$store.commit('addToCar',goodsinfo);
            var _this=this;
            setTimeout(function(){
                _this.$store.commit('addToCar',goodsinfo);
            },1000)
        },
        beforeEnter(el){
            el.style.transform='translate(0,0)';
            
            
        },

        // 先得到徽标的横纵坐标，然后得到小球的横纵坐标，求出之间的差值就是，就是小球要位移的距离
        

        enter(el,done){

            // 获取小球在页面中的位置
            const ballPosition=this.$refs.ball.getBoundingClientRect();
            // 获取徽标在页面中的位置
            const badgePosition=document.getElementById('badge').getBoundingClientRect();

            const xDist = badgePosition.left-ballPosition.left;
            const yDist = badgePosition.top-ballPosition.top;

            el.offsetWidth;
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            // el.style.transition='all 1s ease';
            el.style.transition='all 1s cubic-bezier(.4,-0.3,1,.68)';
            done();
        },
        afterEnter(el){
            this.ballFlag = false;
        },
        getSelectedCount(count){
            // 当子组件把选择的数量传递给父组件的时候，把选中的值保存到data上
            this.selectedCount = count;
            // console.log(count);
        }
    },

    components:{
        swiper,
        numbox
    }
}
</script>

<style lang="scss" scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden; 


        .now_price{
            color:#f40;
            font-size: 16px;
            font-weight: bold;
        }
        .mui-card-footer{
            display:block;
            button{
                margin:8px 0;
            }
        } 
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #f40;
            position: absolute;
            z-index: 99;
            top:410px;
            left:147px;
            // transform: translate(20px,20px);
        }
        .price{
            del{
                color:#555;
            }
        }
        .price,
        .number{
            color:#555;
            font-size:16px;
        } 
    }
</style>