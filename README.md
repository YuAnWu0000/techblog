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

### Issue#1: img src 無法動態綁定。

```
Reason: webpack file loader 無法編譯動態地址。
Solution: 加上require('url')。
```

References: [https://yuugou727.github.io/blog/2018/04/09/webpack-vue-dynamic-assets/](https://yuugou727.github.io/blog/2018/04/09/webpack-vue-dynamic-assets/)

### Issue#2: 無法進入 ngrok 映射 localhost:8080 的網站(invalid host header)。

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

### Issue#4: 套用 Prismjs 後，發現需要重新整理才能看到程式碼變色效果

```
Reason: 在SPA的架構下，若是在index.html中引用Prismjs，他的highlight function只會偵測到當前DOM上的<code>tag，因此之後由js載入的component並不會有效果，需要重新整理。
Solution: 自定義component，在需要時引入並執行Prism.highlightElement()以達到程式碼著色效果。
```

References: [https://prismjs.com/extending.html](https://prismjs.com/extending.html)

### Issue#5: 使用 Axios 接收到 Http Exception(EX: 500 Internal Server Error)後，進入 catch 中 console.log(err)結果為 js 的 error message，看不到後端傳回的自定義錯誤訊息。

```
Reason: console.log打印err的結果為string，看不到其中包含的response object。
Solution: console.log(err.response)便可以得到後端傳回的完整Http Exception object了。
```

References: [https://github.com/axios/axios/issues/960](https://github.com/axios/axios/issues/960)

### Issue#6: v-bind:style="{ backgroundImage: 'url(ramen.imageSrc1)' }"無法正確解析 imagSrc 變數。

```
Reason: ramen.imageSrc1被當成字串處理而不是變數。
Solution: :style="{ backgroundImage: 'url('+ ramen.imgSrc1 +')' }"。
```

References: [https://stackoverflow.com/questions/35242272/vue-js-data-bind-style-backgroundimage-not-working](https://stackoverflow.com/questions/35242272/vue-js-data-bind-style-backgroundimage-not-working)

### Issue#7: 在<el-col></el-col>上註冊@click 事件並不會觸發。

```
Reason: 子組件上的事件預設需要註冊在子組件的methods中。
Solution: 1.使用@click.native。 2.在子組件的methods中新增一個emit方法以觸發父組件的@click事件。
```

References: [https://segmentfault.com/q/1010000011186651/a-1020000011187890](https://segmentfault.com/q/1010000011186651/a-1020000011187890)

### Issue#8: code: 'ERR_OSSL_EVP_UNSUPPORTED'。

```
Reason: openssl與nodejs最新版本不相容。
Solution: 加入NODE_OPTIONS=--openssl-legacy-provider(可用cross-env套件: cross-env NODE_OPTIONS=--openssl-legacy-provider)
```

References: [https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported)
