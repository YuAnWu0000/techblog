import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/css/NotoSansTC.css';
import './assets/css/Roboto.css';

// prismjs code snippet hignlight library
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-scss.min';
import 'prismjs/plugins/autolinker/prism-autolinker.min';
import 'prismjs/plugins/autolinker/prism-autolinker.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
import Prism from 'vue-prism-component';

Vue.component('prism', Prism);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
