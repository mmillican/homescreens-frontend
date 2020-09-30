import Vue from 'vue';
import Vuex from 'vuex';

import ImageService from '@/services/imageService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uploadImage: {
      isUploading: false,
      success: null,
      error: null
    }
  },
  getters: {
    isUploading: state => state.uploadImage.isUploading,
    success: state => state.uploadImage.success,
    error: state => state.uploadImage.error
  },
  mutations: {
    setIsUploading(state, isUploading) {
      state.uploadImage.isUploading = isUploading;
    },
    setSuccessMessage(state, message) {
      state.uploadImage.success = message;
    },
    setErrorMessage(state, message) {
      state.uploadImage.error = message;
    }
  },
  actions: {
    uploadImage (context, data) {
      context.commit('setIsUploading', true);

      const requestData = {
        imageType: data.imageType
      };
      ImageService.uploadImage(requestData, data.file).then((response) => {
        context.commit('setIsUploading', false);
        if (response) {
          context.commit('setSuccessMessage', 'The image has been uploaded.');
        } else {
          context.commit('setErrorMessage', 'There was an error uploading the image.');
        }
      }).catch(() => {
        context.commit('setIsUploading', false);
        context.commit('setErrorMessage', 'There was an error uploading the image.');
      });
    }
  },
  modules: {
  }
});
