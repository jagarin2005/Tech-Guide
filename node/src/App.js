import React, { Component } from 'react';
import InputForm from './components/InputForm';
import FollowersList from './components/FollowersList';
import { fetchFollowers } from './api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      followers: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(user) {
    fetchFollowers(user)
    .then( follower => {
      this.setState({ followers: follower });
    })
  }

  render() {
    let followers = this.state.followers;
    return (
      <div className="App">
        <div className="container">
          <InputForm onFormSubmit={ this.handleFormSubmit } />
          <FollowersList followers={ followers } />
        </div>
      </div>
    );
  }
}

export default App;
