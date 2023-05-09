<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
    <script type="importmap">
    {
      "imports": {
	"three": "https://unpkg.com/three@0.147.0/build/three.module.js",
	"three/addons/": "https://unpkg.com/three@0.147.0/examples/jsm/",
	"mindar-image-three":"https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-image-three.prod.js"
      }
    }
    </script>
    <script type="module">
      import * as THREE from 'three';
      import { MindARThree } from 'mindar-image-three';
      //initiate AR object
      const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
	imageTargetSrc: "./assets/markers/targets.mind"
      });

      const {renderer, scene, camera} = mindarThree;
        //image 1_pliroforiki
      const anchor0 = mindarThree.addAnchor(0);
      const texture0 = new THREE.TextureLoader().load("./assets/image/1.png");
      const geometry0 = new THREE.PlaneGeometry(1, 0.55);
      const material0 = new THREE.MeshBasicMaterial({map: texture0});
      const plane0 = new THREE.Mesh( geometry0, material0);
      anchor0.group.add(plane0);
      //image 2
      const anchor1 = mindarThree.addAnchor(1);
      const texture1 = new THREE.TextureLoader().load("./assets/images/img2.jpg");
      const geometry1 = new THREE.PlaneGeometry(1, 0.55);
      const material1 = new THREE.MeshBasicMaterial({map: texture1});
      const plane1 = new THREE.Mesh( geometry1, material1);
      anchor1.group.add(plane1);
      //more images?
      
      const start = async() => {
	await mindarThree.start();
	renderer.setAnimationLoop(() => {
	  renderer.render(scene, camera);
	});
      }
      const startButton = document.querySelector("#startButton");
      startButton.addEventListener("click", () => {
	start();
      });
      stopButton.addEventListener("click", () => {
	mindarThree.stop();
	mindarThree.renderer.setAnimationLoop(null);
      });
    </script>
    <style>
      body {
	margin: 0;
      }
      #container {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
      }
      #control {
	position: fixed;
	top: 100;
	left: 0;
	z-index: 2;
      }
    </style>
  </head>
  <body>
    <h1>My Game Cards</h1>
    <p>Try to find the content!</p>
    <div id="control">
      <button id="startButton">Start</button>
      <button id="stopButton">Stop</button>
    </div>
    <div id="container">
    </div>
  </body>
</html>
