export const baseUrl = 'https://pixabay.com/api/';
export const API_KEY = '42294787-218c53a6cef21d155db2a680c';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
