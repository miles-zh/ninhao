<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="5" placeholder="请输入评论内容" maxlength="120" v-model="msg"></textarea>
        
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <!-- 从后台获取数据 -->
        <!-- <div class="cmt-list">
            <div class="cmt-item" v-for="item in comments" :key="(item,i).add_time">
                <div class="cmt-title"> 
                    第{{ i+1 }}楼 &nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很烂' ：item.content }}
                </div>
            </div>
        </div> -->

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼 &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2017-09-30
                </div>
                <div class="cmt-body">
                    生命里最重要的事情是要有个远大的目标，并借助才能与坚毅来完成它。——歌德
                    法律之明了，不尽在其条文之详尽，乃在其用意之明显，而民得其喻也。——霍布斯
                </div>
            </div>
        </div>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第2楼 &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2017-09-30
                </div>
                <div class="cmt-body">
                    生命里最重要的事情是要有个远大的目标，并借助才能与坚毅来完成它。——歌德
                    法律之明了，不尽在其条文之详尽，乃在其用意之明显，而民得其喻也。——霍布斯
                </div>
            </div>
        </div>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第3楼 &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2017-09-30
                </div>
                <div class="cmt-body">
                    生命里最重要的事情是要有个远大的目标，并借助才能与坚毅来完成它。——歌德
                    法律之明了，不尽在其条文之详尽，乃在其用意之明显，而民得其喻也。——霍布斯
                </div>
            </div>
        </div>


        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                pageIndex:1,  // 默认展示第一页数据
                comments:[],  // 所有的评论数据
                msg:''   // 评论输入的内容
            }
        },
        created(){
            this.getComments()
        },
        methods:{
            getComments(){ // 获取评论
                // this.$http.get('api/getcomments/'+this.id+'artid?pageindex='+this.pageIndex).then(result => {
                //     if(result.body.status === 0){
                //        // this.comments.push(result.body.message)
                //            // 没得获取新评论数据的时候，应该以老数据拼接上心数据
                //         this.comments = this.comments.concat(result.body.message)
                //     }else{
                //         Toast('获取评论列表失败')
                //     }
                // })
            },
            getMore(){  //加载更多评论
                this.pageIndex++
                this.getComments()
            },

            

            postComment(){
                // 校验是否为空内容
            
            if(this.msg.trim().length===0){
               return Toast('评论内容不能为空')
            }
           
            // 发表评论功能
            // 参数1：请求的url地址
            // 参数2：提交到服务器的数据对象 {content: this.msg}}}
            // 参数3：定义提交时候表单中数据的格式 { emulatJSON.true}

            
                this.$http.post('api/postCmment/'+this.$route.params.id,{ 
                    content:this.msg.trim()
                }).then(function(result){
                    if(result.body.status === 0){
                        // 1.拼接出一个评论对象
                        var cmt = {
                            user_name: '匿名用户',
                            add_time: Date.now(),
                            content: this.msg.trim()

                        }
                        this.comments.unshift(cmt);
                        this.msg=""
                    }
                })
                
            }
        },
        props:['id']
    }

</script>

<style lang="scss" scoped> 
    .cmt-container{
        h3 {
            font-size:18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin:0;
        }
        .cmt-list{
            margin:5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    background: #ccc;
                    line-height: 30px;
                }
                .cmt-body{
                    line-height: 35px;
                    // 缩进
                    text-indent: 2em
                }
            }
        }
    }
</style>