import React from 'react';

const OuterView = () => (
  <div id="row3JS">
    <div id="container12345"> OuterView Will be here </div>
  </div>
)
export default OuterView;




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

    </script>
  </div>
</div> */}