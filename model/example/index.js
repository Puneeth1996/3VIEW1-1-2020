import React from 'react';
import { AppRegistry, View, asset, VrButton, StyleSheet, } from 'react-360';
import Entity from 'Entity';
import Model from './components/Model';
import Lights from './components/Lights';

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

        {/* <VrButton
          onClick={() => {
              this.state.xTarPos = -3;
              this.state.zTarPos = 50;
        }}
        >
          <Entity
              style={{
                  transform: [
                  {translate: [3,-50,-50]},
                  {rotateX: 250},
                  {rotateY: 5},
                  {rotateZ: 5},
                  {scale: 1},
                  ],
              }}
              source={{
                  obj: asset('uploads_files_67386_carpet.obj'),
                  mtl: asset('uploads_files_67386_carpet.mtl')
              }}
              lit={true}
          />
        </VrButton> */}

        {/* <View
          style={{
              opacity: 0.8,
              color: 'red'
          }}
        >
          <VrButton
            onClick={() => {
              this.state.xTarPos = 0;
              this.state.yTarPos = 0;
              this.state.zTarPos = 0;
            }}
          > 
            <Entity
              style={{
                  transform: [
                  { translate: [0, 0, -5]},
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
        </View> */}
        <VrButton
          style={styles.panel}
          onClick={() => {
                  this.state.xTarPos = +1;
                  this.state.zTarPos = -50;
              }}
        >
        </VrButton>

        <Lights />
        <Model />
      </View>
    );
  }
};



const styles = StyleSheet.create({
  panel: {
      // Fill the entire surface
      transform: [
          {translate: [0,0,0]},
          {rotateX: 90},
          {rotateY: 0},
          {rotateZ: 0},
          ],
      width: 50,
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
});


AppRegistry.registerComponent('example', () => example);
