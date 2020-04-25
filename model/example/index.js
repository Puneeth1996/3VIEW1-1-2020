import React from 'react';
import { AppRegistry, View, asset, VrButton, StyleSheet, } from 'react-360';
import Entity from 'Entity';
import Model from './components/Model';
import Lights from './components/Lights';
import MarkerButton from './components/MarkerButton';

export default class example extends React.Component {

  render() {
    return (
      <View >
        <Lights />
        <Model />
        <MarkerButton />
      </View>
    );
  }
};


AppRegistry.registerComponent('example', () => example);
