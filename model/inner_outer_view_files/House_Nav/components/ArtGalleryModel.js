import React from 'react';
import {
    asset,
    View,
} from 'react-360';
import Entity from 'Entity';
export default class ArtGalleryModel extends React.Component {
    render() {
    return (
        <View>
        <Entity
            style={{
                transform: [
                {translate: [0,-50,-10]},
                {scale: 1},
                ],
            }}
            source={{
                obj: asset('modern house model.obj'),
                mtl: asset('modern house model.mtl')
            }}
            lit={true}
        />
        </View>
    );
    }
};

