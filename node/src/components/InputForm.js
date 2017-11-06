import React, { Component } from 'react';

class InputForm extends Component {
  render() {

    return(
      <div className="section">
          <label className="label">Username</label>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input is-large" type="userName" placeholder="Input Your Username" />
            </div>
            <div className="control">
              <button className="button is-large" type="submit">Submit</button>
            </div>
          </div>
      </div>
    )
  }
}

export default InputForm;