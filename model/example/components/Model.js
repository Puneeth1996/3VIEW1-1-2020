import React from 'react';
import { View, asset, } from 'react-360';
import Entity from 'Entity';

export default class Model extends React.Component {
    render() {
        return (
            <Entity
                style={{
                    transform: [
                    {translate: [-1, -0.525, -3.5]},
                    {scale: 1},
                    ],
                }}
                source={{
                    obj: asset('TheFactory.obj'),
                    mtl: asset('TheFactory.mtl')
                }}
                lit={true}
            />
    );
    }
};

