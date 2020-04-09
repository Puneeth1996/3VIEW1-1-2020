import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
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
              {translate: [0, -500, -100]},
              {scale: 1},
            ],
          }}
          source={{
            obj: asset('uploads_files_1004327_house_6.obj'),
            mtl: asset('uploads_files_1004327_house_6.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};



AppRegistry.registerComponent('example', () => example);
