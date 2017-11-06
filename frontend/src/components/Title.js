import React, { Component } from 'react';

class Title extends Component {
  render() {
    return(
      <section className="text-title page-header col-xs-12">
          <article className="col-xs-6 col-xs-offset-3">
              <h1 className="text-center">Lorem ipsum <br /><small>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</small></h1>
          </article>
      </section>
    )
  }
}

export default Title;