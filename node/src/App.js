import React, { Component } from 'react';
import InputForm from './components/InputForm';
import FollowersList from './components/FollowersList';

class App extends Component {
  constructor() {
    super();
    this.state={
      userName: ""
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <form>
            <InputForm />
            <FollowersList userName={this.state.userName} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
