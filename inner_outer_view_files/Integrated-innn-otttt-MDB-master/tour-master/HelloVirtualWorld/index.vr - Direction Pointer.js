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
        <Pano source={asset('chess-world.jpg')} />
        <DIRECTION />
      </View>
    );
  }
};

class DIRECTION extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: 'green',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [0, 0, -12] },
            ]
          }}
        >
          Front
        </Text>
        <Text
          style={{
            backgroundColor: 'blue',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [0, 0, 12] },
              { rotateY: 180 }
            ]
          }}
        >
          Back
        </Text>
        <Text
          style={{
            backgroundColor: 'red',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [12, 0, 0] },
              { rotateX: 0 },
              { rotateY: -90 }
            ]
          }}
        >
          Right
        </Text>
        <Text
          style={{
            backgroundColor: 'yellow',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [-12, 0, 0] },
              { rotateX: 0 },
              { rotateY: 90 }
            ]
          }}
        >
          Left
        </Text>
        <Text
          style={{
            backgroundColor: 'violet',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [0, 12, 0] },
              { rotateX: 90 },
              { rotateY: 0 }
            ]
          }}
        >
          Top
        </Text>
        <Text
          style={{
            backgroundColor: 'violet',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [0, -12, 0] },
              { rotateX: -90 },
              { rotateY: 0 }
            ]
          }}
        >
          Bottom
        </Text>

      </View >
    );
  }
};


AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);