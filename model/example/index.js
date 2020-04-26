import React from 'react';
import { AppRegistry, View } from 'react-360';
import Model from './components/Model';
import Lights from './components/Lights';
import MarkerButton from './components/MarkerButton';

export default class example extends React.Component {

  render() {
    return (
      <View >
        {/* <MarkerButton /> */}
        <VrButton
          onClick={() => {
            this.state.xTarPos = 10;
            this.state.yTarPos = 0;
            this.state.zTarPos = 0;
          }}
        >
          <Entity
            style={{
                transform: [
                {translate: [-10, -3, -4.5]},
                ]
            }}
            source={{
                obj: asset('door_mat.obj'),
            }}
            lit={true}
          />
        </VrButton>
        <VrButton
          onClick={() => {
            this.state.xTarPos = -3.5;
            this.state.yTarPos = 0;
            this.state.zTarPos = 0;
          }}
        >
          <Entity
            style={{
                transform: [
                {translate: [3.5, -3, -4.5]},
                ]
            }}
            source={{
                obj: asset('door_mat.obj'),
            }}
            lit={true}
          />
        </VrButton>
        <Lights />
        <Model />
      </View>
    );
  }
};


AppRegistry.registerComponent('example', () => example);
