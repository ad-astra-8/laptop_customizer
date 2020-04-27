
import React from 'react';
import './summary.css';
import Cart from './Cart';
import Total from './Total';

export default function Summary(props) {
    const total = Object.keys(props.selected)
        .reduce((acc, curr) => acc + props.selected[curr].cost, 0);

    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });


    const summary = Object.keys(props.selected).map(key => (
        <section className="main__summary">
            <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}</div>
                <div className="summary__option__value">{props.selected[key].name}</div>
                <div className="summary__option__cost">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(props.selected[key].cost)}
                </div>
            </div>
        </section>
    )
    );

    return (
        <div>
            {summary}
            {/* <Summary selected={props.selected}/> */}
            <Cart selected={props.selected} />
            {/* {total} */}
            <Total total={total} USCurrencyFormat={USCurrencyFormat} />


        </div>
    )
}