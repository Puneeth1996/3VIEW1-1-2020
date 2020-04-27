import React from 'react';
import {  AppRegistry, View, asset, } from 'react-360';
import Entity from 'Entity';

export default class Model extends React.Component {
    render() {
        // [-1, -0.525, -3.5]
        return (
            <Entity
                style={{
                    transform: [
                    {translate: [-1, -500, -3.5]},
                    ],
                }}
                source={{
                    obj: asset('Creating the Mouse Control/Modern House_05_obj.obj'),
                    mtl: asset('Creating the Mouse Control/Modern House_05_obj.mtl')
                }}
                lit={true}
            />
    );
    }
};

// AppRegistry.registerComponent('Model', () => Model);