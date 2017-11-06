import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FollowersListItem from './FollowersListItem';
import { fetchFollowers } from '../api/';

class FollowersList extends Component {

  constructor(props) {
    super(props);
    this.state={
      followers: []
    }
  }

  componentDidMount() {
    fetchFollowers(this.props.userName)
      .then( follower => {
        this.setState({ followers: follower });
        console.log(this.state.followers);
      })
  }

  render() {
    const followersItem = this.state.followers.map( (user) => {
      return <FollowersListItem 
        name={user.login} 
        html_url={user.html_url}
        avatar_url={user.avatar_url}
        key={user.login} />
    })
    return(
      <div className="section">
        <div className="field">
          <label className="label">Followers List</label>
          { followersItem }
        </div>
      </div>
    )
  }
}

export default FollowersList;