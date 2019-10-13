<template>
    <div>
    
        <ul class="mui-table-view">
                <!-- 从后台获取数据 -->
                <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>
                                {{ item.title }}
                            </h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time | dateFormat}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li> -->

				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/'+1">
						<img class="mui-media-object mui-pull-left" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3644162260,2255973154&fm=26&gp=0.jpg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:2018-6-7 08:00-00</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1503628158,2137976844&fm=26&gp=0.jpg">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>
                                <span>发表时间:2018-6-7 08:00-00</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3049053040,3938207571&fm=26&gp=0.jpg">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>
                                <span>发表时间:2018-6-7 08:00-00</span>
                                <span>点击：0次</span>
                            </p>
						</div>
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
                newslist : []  // 新闻列表
            }
        },
        created(){
            // this.getNewsList()
        },
        methods:{
            // getNewsList(){ //获取新闻列表
            //     this.$http.get('api/getnewslist').then(resutl => {
            //         if (resutl.body.status === 0) {  // 获取数据成功
            //             this.newslist =resutl.body.message
            //         }else{
            //             Toast('获取新闻列表失败')
            //         }
            //     })
            // }
        }
    }
</script> 

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size:14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color:#226aff;
                display: flex;
                justify-content: space-between;
            }
            
        }
    }
</style>