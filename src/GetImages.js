const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37360238-906099131e02ce03408024f3e';

export const searchImages = (searchWord, page) => {
  return fetch(
    `${BASE_URL}?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
