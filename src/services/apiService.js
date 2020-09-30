import axios from 'axios';
import config from '@/config';

const axiosClient = axios.create({
  baseURL: config.API_URL
});

export { axiosClient };

export default {
  async execute(method, uri, data, headers) {
    // TODO: Get access token

    return axiosClient({
      method,
      url: uri,
      data,
      headers
    }).then(response => {
      return response.data;
    });
  },

  async get(uri, data, headers) {
    return this.execute('get', uri, data, headers);
  },

  async post(uri, data, headers) {
    return this.execute('post', uri, data, headers);
  },

  async put(uri, data, headers) {
    return this.execute('put', uri, data, headers);
  },

  async delete(uri, data, headers) {
    return this.execute('delete', uri, data, headers);
  }
};
