<template>
    <div>
        
        <!-- 顶部滑动条区域 -->

		<!-- <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ? mui-active : '']" v-for="item in cates" :key="item.id" @click="getAllPhotoListByCateId(item.id)">
							{{ item.title}}
						</a>
						
					</div>
				</div>
		</div> -->

        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							科技
						</a>
					</div>
				</div>
		</div>

		<!-- 图片列表区域 -->
		<ul class="photo-list">
			<router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>
			</router-link>
		</ul>

		

    </div>
</template>

<script>

// 1.导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'

// 2.初始化滑动空间
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

export default {
    data(){
        return {
			cates:[],  //  所有分类的列表
			list:[]   //  图片列表的数据
        }
	},
	created(){
		this.getAllcategory(),
		this.getAllcategory(0)  //  默认进入页面就主动获取所有图片数据
	},
    methods:{
		getAllcategory(){  //  获取所有的图片分类
			this.$http.get('api/getimgcategory').then(result => {
				if(result.body.status === 0){
					result.body.message.unshift({
						title:'全部',
						id:0
					})
					this.cates = result.body.message
				}
			})
		},
		getPhotoListByCateId(cateId){ //  根据分类id获取图片数据
			this.$$http.get('api/getimages/' + cateId).then(result => {
				if(result.body.status === 0){
					this.list = result.body.message
				}
			})
		}
	},
	mounted(){  // 当组件中的DOM结构已经渲染好了并放到页面中后，会执行这个钩子函数
		mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
	}
}
</script>

<style lang="scss" scoped>

	// 移除警告：[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See
	*{
		touch-action:pan-y;
	}

	.photo-list{
		list-style:none;
		margin:0;
		padding:10px;
		padding-bottom:0;
		li{
			position:relative;
			background-color: #ccc;
			text-align:center;
			margin-bottom: 10px;
			box-shadow: 0 0 6px #999;
			img{
				width: 100%;
				vertical-align: middle;
			}
			.info{
				color:#fff;
				text-align: left;
				position:absolute;
				bottom: 0;
				background-color: rgba(0,0,0,0.4);
				max-height: 84px;
				.info-title{
					font-size: 14px;
				}
				.info-body{
					font-size: 13px;
				}
			}
			img[lazy=loading] {
				width: 40px;
				height: 300px;
				margin: auto;
			}
		}
	}
	
</style>