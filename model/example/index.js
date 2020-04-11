import React from 'react';
import { AppRegistry, View, asset, } from 'react-360';
import Entity from 'Entity';
import Model from './components/Model';
import Lights from './components/Lights';

export default class example extends React.Component {
  render() {
    return (
      <View >
        <Entity
          style={{
              transform: [
              {translate: [0, -10, 0]},
              {scale: 0.007},
              ],
          }}
          source={{
              obj: asset('3d-model.obj'),
              mtl: asset('3d-model.mtl')
          }}
          lit={true}
        />
        <Lights />
        <Model />
      </View>
    );
  }
};



AppRegistry.registerComponent('example', () => example);
