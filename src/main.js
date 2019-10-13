//  入口文件

import Vue from 'vue'

// 导入路由的包
import VueRounter from 'vue-router'

// 安装路由
Vue.use(VueRounter)

// 导入时间插件
import moment from 'moment'

// 导入自己的router.js路由模块
import router from './router'

// 定义全局的过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})


// 导入vue-resource
import VueResource from 'vue-resource'

// 安装vue-resource
Vue.use(VueResource)

// 全局配置请求的根路径
// Vue.http.options.root = 'http://vue.studyit.io'

// 全局设置post时候提交的表单数据格式的组织形式
Vue.http.options.emulateJSON = true

// 导入vuex状态管理插件
import Vuex from 'vuex'

// 安装vuex
Vue.use(Vuex)

// 每次刚进入网站，先从本地获取到购物车中存放的数据，放到car中
var car=JSON.parse(localStorage.getItem('car')||'[]');

var store = new Vuex.Store({
    state:{
        // this.$store.state.***  ，获取state数据
        car:car, // 存储购物车里面的数据，在car数组中存储一些商品的对象，暂时将商品的对象设计成{id:商品的id，count：要购买的数量,price：商品的单价，selected：false，}
    },
    mutations:{
        // this.$store.commint('方法名‘,按需传递唯一的参数)  ，调用mutati里的方法
        addToCar(state,goodsinfo){   
            // 添加购物车，把商品信息保存到store中的car上
            /* 
                分析：
                1.如果购物车中已经有这个商品了，那么只需要跟新数量
                2.如果没有，直接把商品数据push到car中即可
            */
           var flag=false;   // 假设在购物车中没有找到对应的商品
           state.car.some(item=>{
               if(item.id==goodsinfo.id){
                   item.count += parseInt(goodsinfo.count);
                   flag=true;
                   return ;
               }
           })
           if(!flag){
               state.car.push(goodsinfo);
           }
           // 当更新car之后，把数据car保存到本地存储localStorage中
           localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsInfo(state,goodsinfo){
            // 修改购物车中商品数量值
            
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count);
                    return
                }
            })

            // 把最新的购物车数据保存到本地
            localStorage.setItem('car',JSON.stringify(state.car))

        },
        removeFromCar(state,id){
            // 根据 id 从 store 中的购物车删除对应的那一条数据
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1);
                    return
                }
            })
            // 将删除完毕后的最新的购物车数据同步到本地数组
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected=info.selected
                }
            })

            // 把最新的所有购物车商品的状态保存到本localStorage中去
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{
        // this.$store.getters.***  ，调用getters的数据 
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c += item.count;
            })
            return c
        },
        getGoodsCount(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.count;
            })
            return o;
        },
        getGoodsSelected(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.selected;
            })
            return o;
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,  // 勾选的数量
                amount:0  // 勾选的总价
            };
            state.car.forEach(item=>{
                if(item.selected==true){
                    o.count += item.count
                    o.amount += item.price*item.count
                }
            })
            return o;

            
        }
    }
})


// 导入MUI样式表
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
                                    
// 按需导入MInt-UI中的组件
import { Header } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
import { Button} from 'mint-ui';
import { Lazyload } from 'mint-ui';
import { Switch } from 'mint-ui';
Vue.use(Lazyload);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Switch.name, Switch);


// 解决图片分享页面图片列表未出现冷加载图片问题
/* import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css' */

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el : '#app',
    render : c => c(app),
    router, // 挂载路由对象到vm实例上
    store  // 挂在 store 状态管理
})