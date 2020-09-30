import apiService from './apiService';

const imageService = {
  async uploadImage(data, file) {
    // TODO: change these to camelCaseNaming when the lambda is fixed
    const addImageRequest = {
      ImageType: data.imageType,
      FileName: file.name,
      ContentType: file.type
    };

    const presignResponse = await apiService.post('images', addImageRequest);

    const uploadHeaders = {
      'content-type': file.type,
      'x-amz-meta-imageId': presignResponse.Id,
      'x-amz-meta-imageType': data.imageType,
      'x-amz-meta-userName': 'test'
    };

    // TODO: change presignResponse.UploadUrl to camelCaseNaming when the lambda is fixed
    var uploadResponse = await apiService.put(presignResponse.UploadUrl, file, uploadHeaders);
    return uploadResponse === ''; // successful response from S3 should be empty
  }
};

export default imageService;
