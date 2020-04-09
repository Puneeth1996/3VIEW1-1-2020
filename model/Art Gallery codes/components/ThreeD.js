import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
} from 'react-360';
import ArtGalleryModel from './ArtGalleryModel';
import Lights from './Lights';
import Entity from 'Entity';
import PictureButtonObject from './PictureButtonObject';

export default class ThreeD extends React.Component {

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
      <View>

      <PictureButtonObject x={0} y={-5} z={-2.2} pic={'/models/textures/9.png'}/>
      <PictureButtonObject x={0} y={-5} z={2.2} pic={'/models/textures/8.png'} />

      <PictureButtonObject  x={-17.5}  y={-5} z={-25.4} pic={'/models/textures/18.png'} />
      <PictureButtonObject  x={-14.8}  y={-5} z={-25.4} pic={'/models/textures/19.png'} />
      <PictureButtonObject  x={-12.1}  y={-5} z={-25.4} pic={'/models/textures/20.png'} />
      <PictureButtonObject  x={2.4}  y={-5} z={-25.4} pic={'/models/textures/3.png'} />
      <PictureButtonObject  x={7.4}  y={-5} z={-25.4} pic={'/models/textures/10.png'} />
      <PictureButtonObject  x={12.5}  y={-5} z={-25.4} pic={'/models/textures/12.png'} />
      <PictureButtonObject  x={17.5}  y={-5} z={-25.4} pic={'/models/textures/4.png'} />


      <PictureButtonObject  x={-7.3}  y={-5} z={-35.8} pic={'/models/textures/2.png'} />
      <PictureButtonObject  x={-4.8}  y={-5} z={-35.8} pic={'/models/textures/13.png'} />
      <PictureButtonObject  x={-1.9}  y={-5} z={-35.8} pic={'/models/textures/1.png'} />


      <PictureButtonObject  x={-17.2}  y={-5} z={-14.4} pic={'/models/textures/17.png'} />
      <PictureButtonObject  x={-14.5}  y={-5} z={-14.4} pic={'/models/textures/12.png'} />
      <PictureButtonObject  x={-11.5}  y={-5} z={-14.4} pic={'/models/textures/13.png'} />
      <PictureButtonObject  x={-8.5}  y={-5} z={-14.4} pic={'/models/textures/11.png'} />
      <PictureButtonObject  x={-6.0}  y={-5} z={-14.4} pic={'/models/textures/1.png'} />
      <PictureButtonObject  x={-3.5}  y={-5} z={-14.4} pic={'/models/textures/10.png'} />
      <PictureButtonObject  x={-0.58}  y={-5} z={-14.4} pic={'/models/textures/13.png'} />
      <PictureButtonObject  x={2.4}  y={-5} z={-14.4} pic={'/models/textures/9.png'} />
      <PictureButtonObject  x={5}  y={-5} z={-14.4} pic={'/models/textures/12.png'} />
      <PictureButtonObject  x={7.6}  y={-5} z={-14.4} pic={'/models/textures/8w.png'} />


      <PictureButtonObject  x={2.4}  y={-5} z={-5.7} pic={'/models/textures/7.png'} />
      <PictureButtonObject  x={5}  y={-5} z={-5.7} pic={'/models/textures/11.png'} />
      <PictureButtonObject  x={7.6}  y={-5} z={-5.7} pic={'/models/textures/6.png'} />


      <PictureButtonObject  x={2.4}  y={-5} z={5.6} pic={'/models/textures/5.png'} />
      <PictureButtonObject  x={5}  y={-5} z={5.6} pic={'/models/textures/10.png'} />
      <PictureButtonObject  x={7.6}  y={-5} z={5.6} pic={'/models/textures/4.png'} />


      <PictureButtonObject  x={12}  y={-5} z={15.4} pic={'/models/textures/2.png'} />
      <PictureButtonObject  x={15}  y={-5} z={15.4} pic={'/models/textures/1.png'} />
      <PictureButtonObject  x={17.5}  y={-5} z={15.4} pic={'/models/textures/3.png'} />


      <PictureButtonObject  x={20.5}  y={-5} z={13.2} pic={'/models/textures/8.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={9.7} pic={'/models/textures/17.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={6.8} pic={'/models/textures/13.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={3} pic={'/models/textures/12.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-0.2} pic={'/models/textures/2.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-3.2} pic={'/models/textures/9.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-6.5} pic={'/models/textures/10.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-10} pic={'/models/textures/6.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-13} pic={'/models/textures/2.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-16.5} pic={'/models/textures/3.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-19.7} pic={'/models/textures/2.png'} />
      <PictureButtonObject  x={20.5}  y={-5} z={-23} pic={'/models/textures/1.png'} />


      <PictureButtonObject  x={9.5}  y={-5} z={12.5} pic={'/models/textures/4.png'} />
      <PictureButtonObject  x={9.5}  y={-5} z={8} pic={'/models/textures/5.png'} />

      <PictureButtonObject  x={9.5}  y={-5} z={-8} pic={'/models/textures/6.png'} />
      <PictureButtonObject  x={9.5}  y={-5} z={-12.5} pic={'/models/textures/7.png'} />


      <PictureButtonObject  x={-20.2}  y={-5} z={-17.5} pic={'/models/textures/21.png'} />
      <PictureButtonObject  x={-20.2}  y={-5} z={-22.} pic={'/models/textures/22.png'} />


      <PictureButtonObject  x={.5}  y={-5} z={-28} pic={'/models/textures/26.png'} />
      <PictureButtonObject  x={0.5}  y={-5} z={-32.5} pic={'/models/textures/25.png'} />


      <PictureButtonObject  x={-10.4}  y={-5} z={-28} pic={'/models/textures/23.png'} />
      <PictureButtonObject  x={-10.4}  y={-5} z={-32.5} pic={'/models/textures/2.png'} />

      <VrButton
  onClick={() => {
  this.state.xTarPos = -5;
  this.state.zTarPos = 0;
}}>

  


        <Entity
  source={{
    obj: asset('Marker.obj'),
    mtl: asset('Marker.mtl')
  }}
  lit={true}
  style={{
    transform: [
      {translate: [5, -7, 0]},
      {scale: 0.25},
    ],
  }}
/>

</VrButton>

<VrButton
  onClick={() => {
  this.state.xTarPos = -15;
  this.state.zTarPos = 0;
}}>

<Entity
  source={{
    obj: asset('Marker.obj'),
    mtl: asset('Marker.mtl')
  }}
  lit={true}
  style={{
    transform: [
      {translate: [15, -7, 0]},
      {scale: 0.25},
    ],
  }}
/>

</VrButton>

  <VrButton
          onClick={() => {
            this.state.xTarPos = 15;
            this.state.zTarPos = 20;
          }}>

          <Entity
            source={{
              obj: asset('Marker.obj'),
              mtl: asset('Marker.mtl')
            }}
            lit={true}
            style={{
              transform: [
                {translate: [-15, -7, -20]},
                {scale: 0.25}
              ]
            }}
          />

          </VrButton>

          <VrButton
            onClick={() => {
            this.state.xTarPos = 5;
            this.state.zTarPos = 20;
          }}>

            <Entity
              source={{
                obj: asset('Marker.obj'),
                mtl: asset('Marker.mtl')
              }}
              lit={true}
              style={{
                transform: [
                  {translate: [-5, -7, -20]},
                  {scale: 0.25}
                ]
              }}
            />
          </VrButton>

          <VrButton
            onClick={() => {
              this.state.xTarPos = -5;
              this.state.zTarPos = 20;
          }}>

            <Entity
            source={{
              obj: asset('Marker.obj'),
              mtl: asset('Marker.mtl')
            }}
              lit={true}
              style={{
                transform: [
                  {translate: [5, -7, -20]},
                  {scale: 0.25}
                ]
              }}
            />

            </VrButton>

            <VrButton
              onClick={() => {
              this.state.xTarPos = -15;
              this.state.zTarPos = 20;
            }}>

            <Entity
            source={{
              obj: asset('Marker.obj'),
              mtl: asset('Marker.mtl')
            }}
              lit={true}
              style={{
                transform: [
                  {translate: [15, -7, -20]},
                  {scale: 0.25}
                ]
              }}
            />

            </VrButton>

            <VrButton
            onClick={() => {
              this.state.xTarPos = 5;
              this.state.zTarPos = 30;
            }}>

            <Entity
            source={{
              obj: asset('Marker.obj'),
              mtl: asset('Marker.mtl')
            }}
              lit={true}
              style={{
                transform: [
                  {translate: [-5, -7, -30]},
                  {scale: 0.25}
                ]
              }}
            />
            </VrButton>

            <VrButton
            onClick={() => {
              this.state.xTarPos = -15;
              this.state.zTarPos = 10;
            }}>

            <Entity
            source={{
              obj: asset('Marker.obj'),
              mtl: asset('Marker.mtl')
            }}
              lit={true}
              style={{
                transform: [
                  {translate: [15, -7, -10]},
                  {scale: 0.25}
                ]
              }}
            />
            </VrButton>

            <VrButton
            onClick={() => {
              this.state.xTarPos = -15;
              this.state.zTarPos = -10;
            }}>

            <Entity
            source={{
              obj: asset('Marker.obj'),
              mtl: asset('Marker.mtl')
            }}
              lit={true}
              style={{
                transform: [
                  {translate: [15, -7, 10]},
                  {scale: 0.25}
                ]
              }}
            />
            </VrButton>

        <ArtGalleryModel/>
        <Lights/>

      </View>
    );
  }
};