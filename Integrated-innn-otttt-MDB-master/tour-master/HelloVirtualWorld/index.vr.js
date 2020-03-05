import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class HelloVirtualWorld extends React.Component {

  render() {
    return (
      <View>
        <Pano source={[
          asset('right.jpg'),
          asset('left.jpg'),
          asset('top.jpg'),
          asset('bottom.jpg'),
          asset('back.jpg'),
          asset('front.jpg'),
        ]
        } />
      </View>
    );
  }
};




AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);