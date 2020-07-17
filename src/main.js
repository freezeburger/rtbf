import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

import BaseDemoSlot from './components/base/BaseDemoSlot.vue';
import BaseDemoEvent from './components/base/BaseDemoEvent.vue';
import BaseDemoClass from './components/base/BaseDemoClass.vue';

import './auto-register';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
