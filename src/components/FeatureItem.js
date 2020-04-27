import React, { Component } from 'react';
import './featureItem.css';
import slugify from 'slugify';

 const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureItem extends Component {
 
    render() {
      console.log(this.props.itemHash);

        return (
            <div key={this.props.itemHash} className="feature__item">
            <input
              type="radio"
              id={this.props.itemHash}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={this.props.checked}
              onChange={e => this.props.handleUpdate(this.props.feature, this.props.item)}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        );
    }
}

export default FeatureItem;