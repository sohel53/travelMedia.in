// actions/postsActions.js
import axios from 'axios';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './types';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS_REQUEST });
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};
