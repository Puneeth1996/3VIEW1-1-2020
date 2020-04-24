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
      yCurPos : 0,
      zCurPos : 0,
      xTarPos : -5,
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
      postMessage({type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos});
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
        <View
          style={{
              opacity: 0.1,
          }}
        >
          <VrButton
            onClick={() => {
              this.state.xTarPos = 1;
              this.state.yTarPos = 0;
              this.state.zTarPos = -3;
            }}
          > 
            <Entity
              style={{
                  transform: [
                  { translate: [-1, 0.125, 3]},
                  {scale: 0.5},
                  ],
              }}
              source={{
                  obj: asset('uploads_files_67386_carpet.obj'),
                  mtl: asset('uploads_files_67386_carpet.mtl')
              }}
              lit={true}
              color={'red'}
            />
          </VrButton>
        </View>
        <Lights />
        <Model />
      </View>
    );
  }
};



AppRegistry.registerComponent('example', () => example);
