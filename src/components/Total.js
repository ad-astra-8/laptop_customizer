import React, { Component } from 'react';

class Total extends Component {


  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value" >
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.total) }
        </div>
      </div>

    );
  }
}

export default Total;