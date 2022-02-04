import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import './index.css';
import getRecords from './requests/getRecords.js';

(function () {
  'use strict';
  // Set Custom View's ID in .env
  const customViewID = Number(process.env.VIEW_ID);
  // Increment to confirm script version on Kintone
  const scriptVer = '1.0.1';
  console.log(`\nScript version: ${scriptVer}\n\n`);

  kintone.events.on('app.record.index.show', function (event) {
    if (event.viewId !== customViewID) {
      console.log('View ID from APP: ' + event.viewId)
      console.log('VIEW_ID from env: ' + customViewID)
      console.log('Not on the Custom View');
      return event
    }

    function App() {

      // Three takes some time to load in. We create a "ref" in advance to tell react / browsers that our canvas will show up here.
      const mountRef = useRef(null);

      const [shapesArray, setShapesArray] = useState([]);

      useEffect(() => {
        // The Scene, our canvas to display our 3D space.
        var scene = new THREE.Scene();
        const spaceBackground = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80');
        scene.background = spaceBackground;
        // The Camera, our viewpoint in the 3D space.
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // The Renderer, which calculates how to display our viewpoint, and the shapes.
        var renderer = new THREE.WebGLRenderer();
        // Set the viewport size to the width and length of our window.
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Add it to the DOM
        mountRef.current.appendChild(renderer.domElement);
        // Move our camera out a bit.
        camera.position.z = 70;
        // add a global light
        const light = new THREE.AmbientLight(0x404040); // soft white light
        scene.add(light);

        getRecords().then(
          result => {
            result.forEach(shape => {
              console.log(shape);
              let { shapeType, key, length, width, depth } = shape;
              var randomColor = THREE.MathUtils.randInt(0, 0xffffff)
              switch (shapeType) {
                case "Cube":
                  console.log('cube found... building...');
                  var cubeGeometry = new THREE.BoxGeometry(Number(length), Number(width), Number(depth));
                  var cubeMaterial = new THREE.MeshBasicMaterial({ color: randomColor });
                  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                  scene.add(cube);
                  displayShapes.push(cube);
                  break;
                case "Donut":
                  console.log('torus found... building...');
                  const donutGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
                  const donutMaterial = new THREE.MeshStandardMaterial({
                    color: randomColor,
                  });
                  const torus = new THREE.Mesh(donutGeometry, donutMaterial);
                  scene.add(torus);
                  displayShapes.push(torus);
                  break;
                default:
                  break;
              }
            });
          }
        );
        // Animation Loop. Rotate the cube on the X and Y axis by 0.0X per frame.
        var animate = function () {
          requestAnimationFrame(animate);
          scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
              node.rotation.x += Math.random() / 10;
              node.rotation.y += Math.random() / 10;
            }
          });
          renderer.render(scene, camera);
        };
        let onWindowResize = function () {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener("resize", onWindowResize, false);
        // Animate gets called by useEffect on page load.
        animate();
        // Free up memory space when we change pages away.
        return () => mountRef.current.removeChild(renderer.domElement);
      }, []);

      // useEffect(() => {
      //   console.log("shapes have changed...")
      //   renderer.render(scene, camera);
      // }, [shapesArray])

      return (
        <div ref={mountRef} className="App">
        </div>
      );
    }

    ReactDOM.render(
      <React.StrictMode >
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    return event;
  });
})();