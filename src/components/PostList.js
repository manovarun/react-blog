import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

export class PostList extends Component {
  componentDidMount = () => {
    this.props.fetchPostsAndUsers();
  };

  render() {
    const { posts } = this.props;

    return (
      <div className='ui list relaxed divided'>
        {posts !== null &&
          posts.map(post => (
            <div className='item' key={post.id}>
              <i className='large middle aligned icon user'></i>
              <div className='content'>
                <div className='description'>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
                <UserHeader userId={post.userId} />
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ Posts: { posts } }) => ({
  posts
});

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
