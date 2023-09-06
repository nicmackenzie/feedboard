import axios from 'axios';
import { API_URL } from '../utils/constants';

export async function getCategories() {
  try {
    const { data } = await axios.get(API_URL + '/categories');

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}
