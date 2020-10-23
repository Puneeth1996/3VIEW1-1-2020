import React from 'react';
import { AppRegistry, VrButton, asset, View } from 'react-360';
import Entity from 'Entity';
import Model from './components/Model';
import Lights from './components/Lights';
import MarkerButton from './components/MarkerButton';

export default class example extends React.Component {
  render() {
    return (
      <View >
        <MarkerButton />
        <Model />
        <Lights />
      </View>
    );
  }
};


AppRegistry.registerComponent('example', () => example);
