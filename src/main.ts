import Vue from 'vue';
import App from './App.vue';
import component, { ButtonOptions } from './index';

const btnOptions: ButtonOptions = {
  color: '#fcdc2a',
};
Vue.use(component, btnOptions);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
