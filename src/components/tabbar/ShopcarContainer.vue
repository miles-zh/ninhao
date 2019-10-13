<template>
    <div class="shopcar-container">
        <div class="goods-list">

            <!-- 商品列表区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <mt-switch class="switch" ></mt-switch>
                       <img src="https://gd4.alicdn.com/imgextra/i1/0/O1CN01Wh6pje29dj71UsICW_!!0-gaia.jpg">
                       <div class="info">
                           <h1>2019夏季新款时尚女装连衣裙韩版中长款女裙子</h1>
                           <p>
                               <span class="price">$1789</span>
                               <numbox class="numbox" :initcount="$store.getters.getGoodsCount[2]" :goodsid="2"></numbox>
                               <!-- 
                                   如何从购物车中获取商品的数量
                                   1.可以先创建一个空对象，然后循环购物车中所所有商品的数据，把当前商品的id作为这个空对象的属性名，count值作为这个空对象的属性值，这样当把所有的商品循环一边就会得到一个对象.


                                -->
                               <a href="#">删除</a>
                           </p>
                       </div>
                    </div>
                </div>
            </div>

            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <mt-switch class="switch"></mt-switch>
                       <img src="https://gd4.alicdn.com/imgextra/i1/0/O1CN01Wh6pje29dj71UsICW_!!0-gaia.jpg">
                       <div class="info">
                           <h1>2019夏季新款时尚女装连衣裙韩版中长款女裙子</h1>
                           <p>
                               <span class="price">$1789</span>
                               <numbox class="numbox" :initcount="$store.getters.getGoodsCount[2]" :goodsid="2"></numbox>
                               <!-- 
                                   如何从购物车中获取商品的数量
                                   1.可以先创建一个空对象，然后循环购物车中所所有商品的数据，把当前商品的id作为这个空对象的属性名，count值作为这个空对象的属性值，这样当把所有的商品循环一边就会得到一个对象.


                                -->
                               <a href="#">删除</a>
                           </p>
                       </div>
                    </div>
                </div>
            </div>

            <!-- 从后台获取数据 -->
            <!-- <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <mt-switch class="switch" v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                       <img :src="item.thumb_path">
                       <div class="info">
                           <h1>{{item.title}}</h1>
                           <p>
                               <span class="price">${{item.sell_price}}</span>
                               <numbox class="numbox" :goodsid="item.id" :initcount="$store.getters.getGoodsCount[item.id]" ></numbox>
                               <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                           </p>
                       </div>
                    </div>
                </div>
            </div> -->

        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品：<span class="red">1</span> 件，总价：<span class="red">$1789</span> </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
                
            </div>
        </div>

        <!-- 从系统获取数据 -->
        <!-- <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品：<span class="red"> {{$store.getters.getGoodsCountAndAmount.count}} </span> 件，总价：<span class="red">${{$store.getters.getGoodsCountAndAmount.amount}}</span> </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
                
            </div>
        </div> -->


    </div>

</template>
    
<script>

    import numbox from '../subcompopents/shopcar_numbox.vue'

    export default{
        components:{
            numbox
        },
        data(){
            return {
               goodslist:[],
            }
        },
        methods:{
            
            getGoodsList(){
                // 获取购物车商品列表数据
                // 1.获取到store中所有的商品id，然后拼出一个用逗号分割的字符串
                var idArr =[];
                // console.log(this.$store.state.car[0])
                this.$store.state.car.forEach(item => {
                    idArr.push(item.id);
                });
                // console.log(this.$store.getters.getGoodsCount[2])
                if (idArr.length <= 0 )return;
                this.$http.get('api/goods/getshopcarlist/' +idArr.join(',')).then(result=>{
                    if(result.body.state==0){
                        this.goodslist=result.body.message;
                    }
                })
            },
            remove(id,index){
                // 点击删除，把商品从 store 中根据传递额 id 值删除，同时把当前组件中的 goodslist 中，对应要删除的那个商品使用对应的 index 删除
                this.goodslist.splice(index,1);
                this.$store.commit('removeFromCar',id)
            },
            selectedChanged(id,value){
                // 每当点击开关，把最新的开关状态同步到 store 中
                this.$store.commit('updateGoodsSelected',{id:id,selected:value})

            }
        },
        created(){
            this.getGoodsList();
            
        }
    }

</script>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow:hidden;
        width:100%;
        .goods-list{
            img{
                width:50px;
                height:70x;
                margin: 0 7px;
            }
           .mui-card-content-inner{
               display:flex;
               align-items: center;
                .switch{
                    height:25px;
                    width:50px;
                    margin-left:-15px;
                }
                // .mint-switch-core{
                //     height:25px !important;
                //     width:30px !important;
                // }

           }
            .info{
               display: flex;
               flex-direction: column;
               justify-content: space-between;

                h1{
                    font-size:13px;
                    margin-top:0;
                }
                .price{
                    color:#f40;  
                    font-weight: bold;
                }
                p{
                    display: flex;
                    justify-content: center;
                    margin-bottom:0;
                    .numbox{
                        margin:0 8px;

                    }
                }
            }
            
        }
        .jiesuan{
                display:flex;
                justify-content: space-between;
                align-items: center;
                .red{
                    color:#f40;
                    font-weight: bold;
                    font-size:16px;
                }
            }
    }
</style>