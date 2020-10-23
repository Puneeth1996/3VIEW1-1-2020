import React from 'react';
import {
  AppRegistry,
  View,
  AmbientLight,
  PointLight,
} from 'react-360';

export default class Lights extends React.Component {
  render() {
     return (
      <View>

       <AmbientLight intensity={0.4}
         style={{
           color: 'white',
           transform: [
             {translate: [0, 0, 0]},
           ]
         }}
       />

       <PointLight
        intensity={0.8}
        style={{
          color: '#F5F5DC',
          transform: [
            {translate: [5, -5, 0]},
          ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [11, -5, 0]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [19, -5, 0]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [11, -5, 10]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [19, -5, 10]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [11, -5, -11]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [19, -5, -11]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [11, -5, -21]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [-5, -5, -31]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [19, -5, -15]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [5, -5, -15]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [-5, -5, -15]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [-10,-5, -15]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [19, -5, -24]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [5, -5, -24]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [-5, -5, -24]},
           ]
         }}
         distance={10}
       />

       <PointLight
        intensity={0.8}
         style={{
           color: '#F5F5DC',
           transform: [
             {translate: [-10,-5, -24]},
           ]
         }}
         distance={10}
       />

      </View>
    );
   }
};
