import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="row">
        <section className="container">
            <figure className="col-xs-6 col-lg-3">
                <figcaption className="caption">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum varius lacus vel rutrum.</p>
                </figcaption>
            </figure>
            <figure className="col-xs-6 col-lg-3">
                <figcaption className="caption">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum varius lacus vel rutrum.</p>
                </figcaption>
            </figure>
            <figure className="col-xs-6 col-lg-3">
                <figcaption className="caption">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum varius lacus vel rutrum.</p>
                </figcaption>
            </figure>
            <figure className="col-xs-6 col-lg-3">
                <figcaption className="caption">
                    <h3>Lorem ipsum</h3>
                    <div className="">
                        <a href="https://plus.google.com/"><i className="fa fa-google-plus-square fa-3x"></i></a>
                        <a href="https://www.facebook.com/"><i className="fa fa-facebook-square fa-3x"></i></a>
                        <a href="https://www.twitter.com/"><i className="fa fa-twitter-square fa-3x"></i></a>
                    </div>
                </figcaption>
            </figure>
        </section>
      </footer>
    )
  }
}

export default Footer;