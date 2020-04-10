import React from 'react';
import { asset, } from 'react-360';
import Entity from 'Entity';

export default class Model extends React.Component {
    render() {
        return (

            <Entity
                style={{
                    transform: [
                    {translate: [1.75, 0, 4.2]},
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

