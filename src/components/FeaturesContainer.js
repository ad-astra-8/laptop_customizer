import React from 'react';
import FeatureList from './FeatureList';
import SubHeader from './SubHeader';


function FeaturesContainer(props) {
    return (
        <section className="main__form">
            <SubHeader
                SubHeader={SubHeader} />
            <FeatureList
                features={props.features}
                handleUpdate={props.handleUpdate}
                selected={props.selected}
            />
        </section>
    )
}
export default FeaturesContainer;



