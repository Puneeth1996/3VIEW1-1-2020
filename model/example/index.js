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
        <PointLight 

        
        />
        <Entity
          style={{
            transform: [
              {translate: [0, -10, -20]},
              {scale: 1},
            ],
          }}
          source={{
            obj: asset('Bambo_House.obj'),
            mtl: asset('Bambo_House.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};



AppRegistry.registerComponent('example', () => example);
