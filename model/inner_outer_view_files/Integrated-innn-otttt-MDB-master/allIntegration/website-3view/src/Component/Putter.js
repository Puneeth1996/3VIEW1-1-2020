import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

class Putter extends Component{
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
    this.renderer.setClearColor('#abcdef')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)


    // ADD ORBITCONTROLS 
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.enableZoom = false;
    this.meshObject = new MTLLoader()
      .load('./static_assets/archive/modern house model.mtl', (materials) => {
        materials.preload();
        this.objObject = new OBJLoader()
          .setMaterials(materials)
          .load('./static_assets/archive/modern house model.obj', (object) => {
              this.scene.add(object);
            });
      });
    
    
    this.scene.add(new THREE.AmbientLight(0xFFFFFF, 0.8));

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
  this.renderScene()
  this.frameId = window.requestAnimationFrame(this.animate)
}
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
	<div>
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
  </div>
    )
  }
}
export default Putter