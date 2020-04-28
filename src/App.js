import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import FeatureItem from './components/FeatureItem';
import Cart from './components/Cart';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item, idx) => {
        // console.log(item.name);
        const itemHash = slugify(JSON.stringify(idx));   
        const checked = item.name === this.state.selected[feature].name;
        return (
          <FeatureItem key={itemHash} itemHash={itemHash} feature={feature} item={item} checked={checked}
          handleUpdate={this.updateFeature}/>
          // <div key={itemHash} className="feature__item">
          //   <input
          //     type="radio"
          //     id={itemHash}
          //     className="feature__option"
          //     name={slugify(feature)}
          //     checked={item.name === this.state.selected[feature].name}
          //     onChange={e => this.updateFeature(feature, item)}
          //   />
          //   <label htmlFor={itemHash} className="feature__label">
          //     {item.name} ({USCurrencyFormat.format(item.cost)})
          //   </label>
          // </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];
    //   console.log(this.state.selected[feature].name);

    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {USCurrencyFormat.format(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    // });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
          {SubHeader('Customize your laptop')}
            {features}
          </form>
              <Cart total={total}
             USCurrencyFormat={USCurrencyFormat} selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;
