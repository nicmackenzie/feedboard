import axios from 'axios';
import { API_URL } from '../utils/constants';

export async function signup(userDetails) {
  try {
    const { data } = await axios.post(API_URL + '/signup', userDetails);

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}
