import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import UsersReducers from './UsersReducers';

export default combineReducers({ Posts: PostsReducer, Users: UsersReducers });
