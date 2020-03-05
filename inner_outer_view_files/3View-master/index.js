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

import HouseModel from './components/HouseModel';
import Lights from './components/Lights';
import Marker from './components/Marker';

export default class ThreeView extends React.Component {
  render() {
    return (
      <View>
        <Lights />
        <Marker />
        <HouseModel />
      </View>
    );
  }
};

AppRegistry.registerComponent('ThreeView', () => ThreeView);
