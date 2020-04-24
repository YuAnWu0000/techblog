# techblog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Issues
### Issue#1: img src無法動態綁定。
```
Reason: webpack file loader 無法編譯動態地址。
Solution: 加上require('url')。
```
References: [https://yuugou727.github.io/blog/2018/04/09/webpack-vue-dynamic-assets/](https://yuugou727.github.io/blog/2018/04/09/webpack-vue-dynamic-assets/)

### Issue#2: 無法進入ngrok映射localhost:8080的網站(invalid host header)。
```
Reason: webpack-dev-server預設檢查hostname，若不在配置內，拋回錯誤。
Solution: vue.config.js設置disableHostCheck: true。
```
References: [https://blog.csdn.net/renzhehongyi/article/details/80953319](https://blog.csdn.net/renzhehongyi/article/details/80953319)

### Issue#3: Embed YouTube video - Refused to display in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'
```
Reason: Youtube watch endpoint 不允許外部訪問。
Solution: 將/watch?v=YOo001UM8PI改為/embed/YOo001UM8PI。
```
References: [https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti](https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti)

### Issue#4: 套用Prismjs後，發現需要重新整理才能看到程式碼變色效果
```
Reason: 在SPA的架構下，若是在index.html中引用Prismjs，他的highlight function只會偵測到當前DOM上的<code>tag，因此之後由js載入的component並不會有效果，需要重新整理。
Solution: 自定義component，在需要時引入並執行Prism.highlightElement()以達到程式碼著色效果。
```
References: [https://prismjs.com/extending.html](https://prismjs.com/extending.html)

### Issue#5: 使用Axios接收到Http Exception(EX: 500 Internal Server Error)後，進入catch中console.log(err)結果為js的error message，看不到後端傳回的自定義錯誤訊息。
```
Reason: console.log打印err的結果為string，看不到其中包含的response object。
Solution: console.log(err.response)便可以得到後端傳回的完整Http Exception object了。
```
References: [https://github.com/axios/axios/issues/960](https://github.com/axios/axios/issues/960)
