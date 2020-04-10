import React from 'react';
import { AppRegistry, View, } from 'react-360';
import Entity from 'Entity';
import Model from './components/Model';
import Lights from './components/Lights';

export default class example extends React.Component {
  render() {
    return (
      <View >



        


        <Lights />
        <Model />
      </View>
    );
  }
};



AppRegistry.registerComponent('example', () => example);
