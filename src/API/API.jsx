import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35639448-d856c19f58ebd88d37f926e40';
const perPage = 12;

export async function getPictures(searchQuery, page) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
