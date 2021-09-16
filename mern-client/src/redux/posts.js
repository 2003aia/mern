import * as api from '../api/index.js';

export default (posts = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'LIKE':
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case 'CREATE':
        return [...posts, action.payload];
      case 'UPDATE':
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case 'DELETE':
        return posts.filter((post) => post._id !== action.payload);
      default:
        return posts;
    }
  };



export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
