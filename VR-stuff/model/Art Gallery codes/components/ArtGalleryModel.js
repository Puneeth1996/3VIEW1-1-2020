import React from 'react';
import {
  AppRegistry,
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';

export default class ArtGalleryModel extends React.Component {
  render() {
     return (
       <View>
        <Entity
          style={{
            transform: [
              {translate: [0, -5, -10]},
              {scale: 1},
            ],
          }}
          source={{
            obj: asset('ArtGaleryWIthDiffTex.obj'),
            mtl: asset('ArtGaleryWIthDiffTex.mtl')
          }}
          lit={true}
        />
      </View>
     );
   }
 };
