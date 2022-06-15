import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { FBXLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls, loader;

function init() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0,2,7);

    // Render
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1.5;
    renderer.shadowMap.enabled = true;
    document.querySelector('.three-module').appendChild(renderer.domElement);

    // Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0.8)
    const spotLight = new THREE.SpotLight(0xffa95c, 0.3)

    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.00001;
    spotLight.shadow.mapSize.width = 1024 * 4;
    spotLight.shadow.mapSize.height = 1024 * 4;

    scene.add(hemiLight)
    scene.add(spotLight)

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0);

    // Loader
    loader = new FBXLoader();

    loader.load('/3d/ilojobar.fbx', object => {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material.map)
                    child.material.map.anisotropy = 16;
                if (child.material)
                    child.material.side = THREE.DoubleSide;
            }
        })
        object.scale.set(.02, .02, .02)
        scene.add(object);
    }, xhr => {
        console.log(xhr.loaded / xhr.total * 100 + '% loaded');
    }, error => {
        console.log(error);
    });
}

init();

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();