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

export async function getSuggestions(category) {
  try {
    let url = '';
    if (!category) {
      url = API_URL + '/suggestions';
    } else {
      url = API_URL + '/suggestions?category=' + category;
    }

    const { data } = await axios.get(url);

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

export async function addSuggestion(suggestionDetails) {
  try {
    const { data } = await axios.post(
      API_URL + '/suggestions',
      suggestionDetails
    );

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}

export async function deleteSuggestion(suggestionId) {
  try {
    await axios.delete(API_URL + '/suggestions/' + suggestionId);
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}

export async function editSuggestion(id, suggestionDetails) {
  try {
    const { data } = await axios.patch(
      API_URL + '/suggestions/' + id,
      suggestionDetails
    );

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}

export async function upvote(details) {
  try {
    const { data } = await axios.post(API_URL + '/upvotes', details);

    return data;
  } catch (error) {
    throw new Error(
      error.response.data?.errors || 'Something went wrong with this request'
    );
  }
}
