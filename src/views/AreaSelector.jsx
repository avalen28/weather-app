import React from 'react';
import GeoLocation from '../components/geoLocation';
import AreaMap from '../components/AreaMap';

const AreaSelector = () => {
    return (
        <div>
            hello! this is the Area Selector View
            <GeoLocation />
            <AreaMap />
        </div>
    );
};

export default AreaSelector;