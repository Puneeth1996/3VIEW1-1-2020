import React from 'react';
import {
    asset,
    View,
} from 'react-360';
import Entity from 'Entity';
export default class HouseModel extends React.Component {
    render() {
    return (
        <View>
            <Entity
                style={{
                transform:[
                    {translate: [0,-180,-50]},
                    {scale: 1},
                ]
                }}
                source = {{
                    obj: asset('house.obj'),
                    mtl: asset('house.mtl')
                }}
                lit = {true}
            />
        </View>
    );
    }
};

