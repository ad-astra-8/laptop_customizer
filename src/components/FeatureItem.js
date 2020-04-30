import React from 'react';

export default function FeatureItem(props) {


    return (
        <div>
            <li className="feature__item">
                <div className="feature__option"
                    onClick={e => props.handleUpdate(props.feature, props.item)}
                >
                    {props.item.name}
                       ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(props.item.cost)})
                     </div>
            </li>
        </div>

    )

}