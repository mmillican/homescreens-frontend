<template>
  <div id="image-upload">
    <h1>Upload a Screenshot</h1>

    <b-row>
      <b-col md="6" sm="12">
        <b-alert v-model="hasSuccess" variant="success">
          {{ success }}
        </b-alert>
        <b-alert v-model="error" variant="error">
          {{ error }}
        </b-alert>

        <b-overlay :show="isUploading">
          <b-form @submit.prevent="uploadPhoto">
            <b-form-group label="Screenshot type" label-for="typeInput">
              <b-form-select
                id="typeInput"
                v-model="image.type"
                :options="screenshotTypes"
              />
            </b-form-group>

            <b-form-group>
              <b-form-file
                v-model="image.file"
                multiple
                accept="image/*"
                placeholder="Select your photo or drop it here to upload"
                drop-placeholder="Drop your photo here to upload"
                class="mb-2"
              />

            </b-form-group>

            <b-button type="submit" variant="primary" :disabled="!canSubmit">Upload photo</b-button>
          </b-form>
        </b-overlay>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      image: {
        type: null,
        file: null
      },
      screenshotTypes: [
        { value: 'phone', text: 'Phone (iPhone, Android, etc)' },
        { value: 'tablet', text: 'Tablet (iPad, Fire Tablet, etc)' },
        { value: 'watch', text: 'Smart Watch' },
        { value: 'browser', text: 'Browser Start Page' }
      ]
    };
  },
  computed: {
    canSubmit: function () {
      return this.image.type &&
        (this.image.file && this.image.file.length > 0);
    },
    ...mapGetters(['isUploading', 'success', 'error']),
    hasSuccess: function() { return this.success !== null; }
  },
  methods: {
    async uploadPhoto() {
      const data = {
        imageType: this.image.type,
        file: this.image.file[0] // should only be 1 file
      };

      await this.$store.dispatch('uploadImage', data);
    }
  }
};
</script>
