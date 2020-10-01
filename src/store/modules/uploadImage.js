import ImageService from '@/services/imageService';

const uploadImageModule = {
  namespaced: true,

  state: {
    isUploading: false,
    success: null,
    error: null
  },

  getters: {
    isUploading: state => state.isUploading,
    success: state => state.success,
    error: state => state.error
  },

  mutations: {
    setIsUploading(state, isUploading) {
      state.isUploading = isUploading;
    },
    setSuccessMessage(state, message) {
      state.success = message;
    },
    setErrorMessage(state, message) {
      state.error = message;
    },
    clearMessages(state) {
      state.success = null;
      state.error = null;
    }
  },

  actions: {
    uploadImage (context, data) {
      context.commit('clearMessages');
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
  }
};

export default uploadImageModule;
