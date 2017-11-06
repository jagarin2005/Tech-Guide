import React, { Component } from 'react';
import FollowersListItem from './FollowersListItem';

class FollowersList extends Component {

  render() {
    console.log(this.props.followers)
    let followersItem = (this.props.followers.length !== 0) ? this.props.followers.map( (user) => {
      return <FollowersListItem 
        name={user.login} 
        html_url={user.html_url}
        avatar_url={user.avatar_url}
        key={user.login} />
    }) : "No follower";

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