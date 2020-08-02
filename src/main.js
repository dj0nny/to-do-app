import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App.vue';
import router from './router';

import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

Vue.prototype.$uikit = UIkit;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
