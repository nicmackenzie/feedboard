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

export async function getSuggestions() {
  try {
    const { data } = await axios.get(API_URL + '/suggestions');

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}

export async function getSuggestion(suggestionId) {
  try {
    const { data } = await axios.get(API_URL + '/suggestions/' + suggestionId);

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}

export async function addComment(commentDetails) {
  try {
    const { data } = await axios.post(API_URL + '/comments', commentDetails);

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}