import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';
import { FETCH_POSTS, SET_LOADING, FETCH_USER } from '../types';

export const setLoading = () => ({
  type: SET_LOADING
});

export const fetchPosts = () => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await jsonplaceholder('/posts');
    dispatch({ type: FETCH_POSTS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   try {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({ type: FETCH_USER, payload: response.data });
//   } catch (err) {
//     console.log(err);
//   }
// });

export const fetchUser = id => async dispatch => {
  try {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().Posts.posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().Posts.posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
