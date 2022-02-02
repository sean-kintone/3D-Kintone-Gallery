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
//        const spaceBackground = new THREE.TextureLoader().load('./space.jpeg');
//        scene.background = spaceBackground;
        // The Camera, our viewpoint in the 3D space.
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // The Renderer, which calculates how to display our viewpoint, and the shapes.
        var renderer = new THREE.WebGLRenderer();
        // Set the viewport size to the width and length of our window.
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Add it to the DOM
        mountRef.current.appendChild(renderer.domElement);

        var geometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00002a});
        var floor = new THREE.Mesh(geometry, material);
        floor.material.side = THREE.DoubleSide;
        floor.position.z = -90;
        floor.rotation.z = 90;
        scene.add(floor);
        // Move our camera out a bit.
        camera.position.z = 70;
        
        getRecords().then(
          result => {
            setShapesArray(result)
            console.log(shapesArray);
          }
        );
        // Animation Loop. Rotate the cube on the X and Y axis by 0.01 per frame.
        var animate = function () {
          requestAnimationFrame(animate);
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