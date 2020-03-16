import { FETCH_POSTS, SET_LOADING } from '../types';

const initialState = {
  loading: false,
  posts: null,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case FETCH_POSTS:
      return { ...state, posts: payload, loading: false };
    default:
      return state;
  }
};
