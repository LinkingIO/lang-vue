# install nodejs

# project init 
vue init mpvue/mpvue-quickstart mpvue-mybook
cd mpvue-mybook
cnpm install

# 删除多余内容
app.json
仅保留pages，window

components内文件删除

仅保留pages/index
删除pages/index/main.js 中的异常处理
处理pages/index/index.vue

npm run dev

# 此处的小坑 注意sass-loader的版本
cnpm install sass-loader@7.3.1 --save-dev
cnpm install node-sass --save-dev

# 打开微信开发者工具
导入项目: mpvue-mybook/dist/wx
appID

# 组件库
有赞开源
app.json中引入
```
  "usingComponents": {
    "van-button": "vant-weapp/dist/button/index"
  }
```

问题： 不能找到vant-app

原因: node_modules被wx工具打包到common/vendor文件

解决： 修改构建配置：

# router插件
小程序路由转换成vue router

```vue
this.$router.push('/pages/categoryList/main')
this.$router.replace('/pages/categoryList/main')
```

# 跨平台的http请求
使用fly.js 多平台发送

# function格式化空格
.eslintrc.js 增加 'space-before-function-paren': "off"

webstorm 设置中，codestyle -》 js --》spaces --》

# 解决问题
TypeError: dP.f is not a function
删除dist/wx

