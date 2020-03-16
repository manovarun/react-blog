import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PostList from './components/PostList';
import store from './store';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='ui container'>
          <PostList />
        </div>
      </Provider>
    );
  }
}

export default App;
