import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auto-register';
import router from './router';
import store from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');


//-------
const URL = 'http://localhost:8000/auth/login'
const options = {
  method:'POST',
  headers:{
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    email:'bruno@email.com',
    password:'bruno'
  })
}

fetch(URL,options)
  .then( res => res.json() )
  .then( data => console.table(data) )

