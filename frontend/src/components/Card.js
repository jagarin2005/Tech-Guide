import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <figure className="thumbnail">
                <img src="../images/img-placeholder.png" alt="img_placeholder" />
                <figcaption className="caption">
                    <h3>Item</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum varius lacus vel rutrum.</p>
                </figcaption>
            </figure>
        </div>
    )
  }
}

export default Card;