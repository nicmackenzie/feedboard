import axios from 'axios';
import { url } from '../utils/constants';

const API_URL = url();
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

export async function login(userDetails) {
  try {
    const { data } = await axios.post(API_URL + '/login', userDetails);

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}

export async function logout() {
  try {
    await axios.delete(API_URL + '/logout');
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}
