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
    this.meshObject = new MTLLoader()
      .load('./static_assets/archive/modern house model.mtl', (materials) => {
        materials.preload();
        this.objObject = new OBJLoader()
          .setMaterials(materials)
          .load('./static_assets/archive/modern house model.obj', (object) => {
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