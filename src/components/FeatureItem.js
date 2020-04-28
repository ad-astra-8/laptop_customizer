import React, { Component } from 'react';
import './featureItem.css';
import slugify from 'slugify';

 const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureItem extends Component {
  constructor() {
    super();
   this.handleUpdateFeatureItem= this.handleUpdateFeatureItem.bind(this);

  }

 handleUpdateFeatureItem() {
   this.props.handleUpdate(this.props.feature, this.props.item);
   
 }
    render() {
      console.log(this.props.feature);

        return (
            <div  key={this.props.item.name} className="feature__item">
            <input
            key={this.props.item.name}
              type="radio"
              id={this.props.itemHash}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={this.props.checked}
              onChange={this.handleUpdateFeatureItem}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        );
    }
}

export default FeatureItem;