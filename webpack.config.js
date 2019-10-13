// 这个文件就是 js文件，通过node模块操作，向外暴露了 一个配置对象

const path =require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 导入html-webpack-plugin插件将index.html文件转为放在内存中
// 只要是插件都要放到plugins中去
const htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    devtool:"sourcemap",
    //入口，表示weback打包那个文件
    entry:path.join(__dirname,'./src/main.js'),
    //指定打包好的文件，输出到那个目录中
    output:{
        //指定打包好的文件，输出到那个目录中
        path:path.join(__dirname,'./dist'),
        //指定输出的文件名称
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({ // 创建一个在内存中生成html的插件
            template:path.join(__dirname,'./src/index.html'), // 指定模板页面 将来会根据指定的页面路径，去生成内存中的页面
            filename:'index.html' // 指定生成的页面名称
        }),
        new VueLoaderPlugin()
    ],
    module:{ // 用于配置所有第三方模块加载器
        rules:[  // 所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']}, //配置处理 .css 文件的第三方 loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}, //配置处理.less文件第三方规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},  //配置处理.scss文件第三方规则
            // {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'} //配置处理图片文件第三方规则
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=14000&name=[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff)$/,use:'url-loader'}, //处理字体文件
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},  //这是配置babel来转换高级的es6语法
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{ // 修改vue导入时候包的路径
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }




}