import React, { Component } from 'react';

class FollowersListItem extends Component {

  render() {
    const login = this.props.name || "Loading...",
          html_url = this.props.html_url,
          avatar_url = this.props.avatar_url

    return(
      <div className="box">
        <div className="media">
          <div className="media-left">
            <div className="image is-64x64">
              <img src={ avatar_url } alt="avatar" />
            </div>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong><a className="title" href="">{ login }</a></strong>
              </p>
              <p className="subtitle">
                URL: { html_url }
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FollowersListItem;