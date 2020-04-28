import React from 'react';
import Total from './Total';
import Summary from './Summary';
import './cart.css';


function Cart(props) {

    const total = Object.keys(props.selected)
        .reduce((acc, curr) => acc + props.selected[curr].cost, 0);

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={props.selected} /> 
            <Total total={total} />
        </section>

    )
}

export default Cart;