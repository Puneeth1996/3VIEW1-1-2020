// import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div class="row">
//       <div id="row3JS">
//         <h1> We test out with threejs library plugin here! </h1>
//       </div>
//     </div>
    
//   );
// }

// export default App;

// import React, { Component } from 'react';
// import THREE from 'three';

// class App extends Component {
//   componentDidMount(){
//     const width = this.mount.clientWidth
//     const height = this.mount.clientHeight
//     //ADD SCENE
//     this.scene = new THREE.Scene()
//     //ADD CAMERA
//     this.camera = new THREE.PerspectiveCamera(
//       75,
//       width / height,
//       0.1,
//       1000
//     )
//     this.camera.position.z = 4
//     //ADD RENDERER
//     this.renderer = new THREE.WebGLRenderer({ antialias: true })
//     this.renderer.setClearColor('#000000')
//     this.renderer.setSize(width, height)
//     this.mount.appendChild(this.renderer.domElement)
//     //ADD CUBE
//     const geometry = new THREE.BoxGeometry(1, 1, 1)
//     const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
//     this.cube = new THREE.Mesh(geometry, material)
//     this.scene.add(this.cube)
// this.start()
//   }
// componentWillUnmount(){
//     this.stop()
//     this.mount.removeChild(this.renderer.domElement)
//   }
// start = () => {
//     if (!this.frameId) {
//       this.frameId = requestAnimationFrame(this.animate)
//     }
//   }
// stop = () => {
//     cancelAnimationFrame(this.frameId)
//   }
// animate = () => {
//    this.cube.rotation.x += 0.01
//    this.cube.rotation.y += 0.01
//    this.renderScene()
//    this.frameId = window.requestAnimationFrame(this.animate)
//  }
// renderScene = () => {
//   this.renderer.render(this.scene, this.camera)
// }
// render(){
//     return(
//       <div
//         style={{ width: '400px', height: '400px' }}
//         ref={(mount) => { this.mount = mount }}
//       />
//     )
//   }
// }


// export default App;



import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

class App extends Component{
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)


    // ADD ORBITCONTROLS 
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.enableZoom = false;

    //ADD CUBE
    // const geometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    // this.cube = new THREE.Mesh(geometry, material)
    // this.scene.add(this.cube)

    // ADD OBJ AND MTL FILES
    new MTLLoader()
      .load('./static_assets/archive/modern house model.mtl', function (materials) {
        materials.preload();
        new OBJLoader()
          .setMaterials(materials)
          .load('./static_assets/archive/modern house model.obj',
            function (object) {
              // const scaleValue = 0.05;
              // object.scale.set(scaleValue,scaleValue,scaleValue);
              // object.translateX( 0 );
              // object.translateY( 0 );
              // object.translateZ( 0 );
              this.scene.add(object);
            });
      });
    
    
    this.scene.add(new THREE.AmbientLight(0xFF34FF, 10));

    this.start()
  }
componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
  // this.cube.rotation.x += 0.01
  // this.cube.rotation.y += 0.01
  this.renderScene()
  this.frameId = window.requestAnimationFrame(this.animate)
}
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default App


{/* <div class="row">
<div id="row3JS">
  <script src="js/three.min.js"></script>
  <script src="js/OBJLoader.js"></script>
  <script src="js/MTLLoader.js"></script>
  <script src="js/OrbitControls.js"></script>
  <script>
    var obj = "";
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // camera.position.z = 60;
    // camera.position.y = 10;
    // camera.position.x = 10;
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('row3JS').appendChild(renderer.domElement);

    renderer.setClearColor(0xbfe3dd, 1);

    window.addEventListener('resize', function () {
      var WIDTH = window.innerWidth;
      var HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    var meshObject = new THREE.MTLLoader()
      .load('./static_assets/archive/modern house model.mtl', function (materials) {
        materials.preload();
        var objObject = new THREE.OBJLoader()
          .setMaterials(materials)
          .load('./static_assets/archive/modern house model.obj',
            function (object) {
              var scaleValue = 0.05;
              object.scale.set(scaleValue,scaleValue,scaleValue);
              // object.rotation.X += 0;
              // object.rotation.y += 0;
              // object.translateZ( 0 );
              object.translateX( 0 );
              object.translateY( 0 );
              object.translateZ( 0 );
              
              obj = object;
              scene.add(object);
            });
      });

    var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.7);
    scene.add(ambientLight);
    
    camera.position.z = 2.5;
    var update = function () {
      // Important
      // can use cube bezier and sine functions on rations for useful realization
      obj.rotation.y += 0.004;
    };
    
    var render = function() {
      renderer.render(scene, camera);
    };
    
    var animate = function () {
      requestAnimationFrame(animate);
      update();
      render();
      document.getElementById("row3JS").removeAttribute('style')
    };

    animate();

  </script> */}