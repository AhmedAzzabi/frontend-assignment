import 'Styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Default from "./layouts/Default.vue";

Vue.component("default-layout", Default);

new Vue({
  router,
  render: createElement => createElement(App),
  el: '#app'
});
