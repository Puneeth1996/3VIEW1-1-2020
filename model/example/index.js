import React from 'react';
import { AppRegistry, View, asset, VrButton } from 'react-360';
import Entity from 'Entity';
import Model from './components/Model';
import Lights from './components/Lights';

export default class example extends React.Component {
  constructor() {
    super();
    this.state = {
      xCurPos : -5,
      zCurPos : 0,
      xTarPos : -5,
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
      postMessage({type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos});
    }
    else if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3)
    {
      //  to match the Z coordinates
      this.setState({
        zCurPos : this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05
      });
      postMessage({type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos});
    }
    requestAnimationFrame(this.Lerp);
  }

  render() {
    return (
      <View >

        <VrButton
          onClick={() => {
            this.state.xTarPos = -5;
            this.state.zTarPos = 0;
          }}
          style={{
              opacity: 0,
          }}
        > 
          <Entity
            style={{
                transform: [
                { translate: [0, -20, 0]},
                { rotateX: 180 },
                {scale: 0.007},
                ],
            }}
            source={{
                obj: asset('3d-model.obj'),
                mtl: asset('3d-model.mtl')
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
