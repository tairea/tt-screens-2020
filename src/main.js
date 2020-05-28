import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

import router from './router'
import App from './App.vue'

Vue.use(firestorePlugin, VueRouter)

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      vuetify,
      render: h => h(App)
    })
  }
})