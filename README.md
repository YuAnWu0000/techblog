# techblog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
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
Reason: Youtube watch endpoint 不允許外部訪問
Solution: 將/watch?v=YOo001UM8PI改為/embed/YOo001UM8PI
```
References: [https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti](https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti)
