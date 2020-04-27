import React from 'react';
import { AppRegistry, VrButton, asset, View } from 'react-360';
import Entity from 'Entity';
import Model from './components/Model';
import Lights from './components/Lights';
// import MarkerButton from './components/MarkerButton';

export default class example extends React.Component {
  constructor() {
      super();
      this.state = {
      xCurPos : 0,
      yCurPos : 0,
      zCurPos : 0,
      xTarPos : 0,
      yTarPos : 0,
      zTarPos : 0,
      };
      this.Lerp = this.Lerp.bind(this);
  }
  
  componentDidMount(){
      this.Lerp();
  }
  
  Lerp() {
      if(Math.abs (this.state.xCurPos - this.state.xTarPos) > 0.3)
      {
          //  to match the X coordinates
          this.setState({
              xCurPos : this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05
          });
          postMessage({type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos});
      }
      else if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3)
      {
          //  to match the Z coordinates
          this.setState({
              zCurPos : this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05
          });
          postMessage({type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos});
      }
      else if(Math.abs (this.state.yCurPos - this.state.yTarPos) > 0.3)
      {
          //  to match the Z coordinates
          this.setState({
              yCurPos : this.state.yCurPos * (1 - 0.05) + this.state.yTarPos * 0.05
          });
          postMessage({type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos});
      }
      requestAnimationFrame(this.Lerp);
  }
  

  render() {
    return (
      <View >
        <Lights />
        {/* <MarkerButton /> */}
        <VrButton
          onClick={() => {
            this.state.xTarPos = 3;
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
        <Model />
      </View>
    );
  }
};


AppRegistry.registerComponent('example', () => example);
