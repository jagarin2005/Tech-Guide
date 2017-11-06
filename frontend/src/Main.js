import React, { Component } from 'react';
import Title from './components/Title';
import Card from './components/Card';

class Container extends Component {
  render() {
    return (
      <main className="row">
          <Title />
          <section className="content col-xs-12">
              <div className="container">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
              </div>
          </section>
      </main>
    )
  }
}

export default Container;