import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserHeader extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return <div className='header'>{this.props.user.name}</div>;
  }
}

const mapStateToProps = ({ Users }, ownProps) => ({
  user: Users && Users.find(user => ownProps.userId === user.id)
});

export default connect(mapStateToProps, null)(UserHeader);
