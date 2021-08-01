import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
