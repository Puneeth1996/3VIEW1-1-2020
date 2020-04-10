import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  PointLight,
} from 'react-360';
import Entity from 'Entity';

export default class example extends React.Component {
  render() {
    return (
      <View >


        <AmbientLight intensity={0.7}
          style={{
            color: 'white',
            transform: [
              {translate: [0, 0, 0]},
            ]
          }}
        />

        <Entity
          style={{
            transform: [
              {translate: [0, 50, 100]},
              {scale: 5},
            ],
          }}
          source={{
            obj: asset('3d-model.obj'),
            mtl: asset('3d-model.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};



AppRegistry.registerComponent('example', () => example);
