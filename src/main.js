import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/css/NotoSansTC.css';
import './assets/css/Roboto.css';

// prismjs is a code snippet hignlight library
// 在SPA架構下使用prismjs需要自定義component在需要時呼叫highlight function, 不然每次都得重新整理才有效果
import MyPrism from './components/MyPrism.vue';
Vue.component('MyPrism', MyPrism);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
