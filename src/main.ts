import Vue from 'vue';
import App from './App.vue';
import component from './index';

const btnOptions = {
  color: '#fcdc2a',
  borderWidth: 2
};
Vue.use(component, btnOptions);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
