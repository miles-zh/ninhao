# 练习
使用npm run dev打开项目


## 制作首页App组件

## 改造tabbar为router-link

## 设置路由高亮

## 点击tabbar中的路由连接，显示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据

   1.获取数据，使用vue-resource
   2.使用vue-resource的get获取数据
   3.获取到的数据要保存到data上
   4.使用v-for循环渲染每个item

## 改造九宫格 区域样式

## 改造新闻资讯，路由连接

## 新闻资讯页面制作
1.制作界面，使用mui中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据

## 实现新闻资讯列表点击跳转到新闻详情
1.把列表中的每一项改造为router-link，同时跳转时应该提供唯一的表示符
2.创建唯一的新闻详情页面 NewsInfo
3.在路由模块中将新闻详情的路由地址和组件地址对应起来

## 实现新闻详情的页面布局，和数据渲染

## 单独封装一个comment.vue评论子组件
1.创建一个单独的comment.vue 组件模板
2.在需要使用comment组件的页面中先收到导入comment组件
 + `import comment from './comment.vue'`

3.在父组件中使用`comment`属性，将刚才导入的comment组件注册为自己的子组件
4.将注册子组件时候的，注册名称，以标签形式在页面中引用
   
## 获取所有的评论数据，显示到页面中

## 实现点击加载更多评论功能
1.为加载更多按钮绑定点击事件，在事件中请求下一页数据
2.点击加载更多，让pageIndex++，然后重新条用this.getComments()方法重新获取最新一页的数据s
3.为了防止新数据覆盖老数据的情况，我们应该在点击加载更多的时候，每当获取到的新数据，应该让老数据调用数组的concat方法拼接上新数据

## 发表评论的功能
1.把文本框做双向数据绑定
2.为发表按钮绑定事件
3.校验评论内容是否为空，如果为空，则Toast提示用户评论内容不能为空
4.通过vue-resource发送请求，把评论内容提交给服务器
5.当发表评论Ok后，重新刷新列表，以查看新的评论
+ 如果调用getComments()方法重新刷新列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
+ 当成功后在客户端手动拼接出一个最新的评论对象，然后调用数组的unshift()方法，把最新的评论追究到data中comments的开头，这样就可以完美实现刷新评论列表的需求

## 改造图片分享按钮为路由的连接并显示对应的组件页面

## 绘制图片列表组件结构，并美化样式
1.制作顶部的滑动条
2.制作底部图片列表

### 制作顶部滑动条的坑
1.借助MUI中的tab-top-webview-main.html页面
2.需要把slider区域的mui-fullscreen类去掉
3.滑动条无法正常触发滑动，通过检查官方文档，发现这是一个js组件，需要被初始化一下
+ 导入mui.js
+ 调用官方提供的方式去初始化
```
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
4.我们在初始化滑动条的时候导入了mui.js，但是报错：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
+ 可能时mui.js中庸到了'caller', 'callee', and 'arguments'，但是webpack打包好的bundle.js中默认是启用严格模式的所以这两者冲突了；
+ 解决方法：1.把mui.js 中的非严格模式的代码改掉；2.把webpack 打包时候的严格模式禁用掉；
+ 最终选择了第二种方案，移除严格模式，使用插件：babel-plugin-transform-remove-strict-mode
5.刚进入图片分享页面的时候，滑动条无法正常工作，经过认真分析，发现，初始化滑动条必须等dom元素加载完毕，所以把初始化滑动条的代码搬到mounted这个钩子函数（生命周期函数）里面
6.当滑动条调试OK后，发现tabbar 无法正常工作了，我们需要把每一个tabbar 按钮的样式中的`mui-tab-item`类重新改一下名字
7.获取所有分类并渲染分类列表

### 制作图片列表区域
1.图片列表需要使用冷加载技术，我们使用mint-ui提供的现成组件'lazy-load'
2.根据lazy-load的使用文档，尝试使用
3.渲染图片列表数据

### 图片列表的懒加载改造和样式美化

## 点击图片跳转到图片详情页面
1.在改造li成link的时候，需要使用tag属性制定要渲染为哪种元素

## 实现详情页面的布局和美化，同时获取数据渲染页面

## 实现图片详情中 缩略图的功能
1.使用插件vue-preview这个缩略图插件
2.获取到所有的图片列表 ，然后使用v-for指令渲染
4.每一个图片数据对象中有 w 和 h 属性

## 绘制商品列表基本结构并美化

## 尝试在手机上运行测试
1.保证手机上可以正常运行
2.要保证手机和开发项目的电脑处于同一wifi环境中
3.打开项目中package.json文件，在dev脚本中添加一个 --host 指令，把当前电脑的wifi地址设置为 --host指令值
+ 如何查看自己电脑所处wifi的ip，在cmd终端中运行'ipconfig' 查看无限网的IP地址# miles-vue-shopmall-exercises
