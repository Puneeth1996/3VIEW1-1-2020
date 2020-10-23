import React from 'react';
import { asset, AmbientLight, PointLight, View, } from 'react-360';
import Entity from 'Entity';
export default class Lights extends React.Component {
    render() {
        return (
            <View >
                <AmbientLight intensity={1}
                    style={{
                        color: 'white',
                        transform: [
                        {translate: [0, 0, 0]},
                        ]
                    }}
                />
            </View>
        );
    }
};