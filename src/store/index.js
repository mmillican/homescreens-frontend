import Vue from 'vue';
import Vuex from 'vuex';

import uploadImageModule from './modules/uploadImage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    uploadImage: uploadImageModule
  }
});
