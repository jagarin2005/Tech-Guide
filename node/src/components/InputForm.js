import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    let user = this.state.input.trim();
    this.props.onFormSubmit(user);
    e.preventDefault();
  }
  
  render() {
    return(
      <div className="section">
        <form onSubmit={ this.handleSubmit }>
          <label className="label">Username</label>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input is-large" type="text" value={ this.state.input } placeholder="Input Your Username" onChange={ this.handleTextChange } />
            </div>
            <div className="control">
              <button className="button is-large" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default InputForm;