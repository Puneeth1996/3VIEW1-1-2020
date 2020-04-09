import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset
} from 'react-360';
import Entity from 'Entity';

export default class example extends React.Component {
  render() {
    return (
      <View >
        <Entity
          style={{
            transform: [
              {translate: [0, 0, 0]},
              {scale: 1000},
            ],
          }}
          source={{
            obj: asset('Modern House_1_obj.obj'),
            mtl: asset('Modern House_1_obj.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};



AppRegistry.registerComponent('example', () => example);
