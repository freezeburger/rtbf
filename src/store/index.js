import Vue from 'vue'
import Vuex from 'vuex'
import {ActionTypes} from './action-types';
import {connect} from '../services/auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    welcomeMessage:'Bienvenue Utilisateur !'
  },
  mutations: {
    connection( state, credentials){
      console.log(credentials.email);
      connect(credentials).then(data => state.welcomeMessage = data)
      // state.welcomeMessage = credentials.email;
    }
  },
  actions: {
    [ActionTypes.CONNECTION] (context, payload) {
      context.commit('connection',payload)
      //console.log(context, payload);
    }
  },
  modules: {
  }
})
