import * as THREE from 'three';

// canvas

const canvas = document.querySelector('canvas.webgl'); // grab the canvas element from the html.

// scene
const scene = new THREE.Scene();

// object -- need geometry and material to create mesh. 

const geometry = new THREE.BoxGeometry(1, 1, 1)  // width height length stuff for shape.
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 , wireframe: true}) // red hexidecimal or name, whatever.
const mesh = new THREE.Mesh( geometry, material); // set mesh const to geometry and material!

scene.add(mesh); //add object to the scene! or you will have no object...

// sizes

const sizes = {
    width: 800,
    height: 600
}

// camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // angle and aspect ratio
camera.position.z = 3;
scene.add(camera); // not important now, but for later projects yes.

// webgl renderer

const renderer =  new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height); // set the size of the renderer to the size of the canvas?

renderer.render(scene, camera); 
// render the scene and camera. we are inside the cube right now. 
// this is why it looks black. we need to reposition the camera so we can be outside the cube and see it!
// we use position, rotation, and scale to postion things.
// lets move the camera so the position of the cube will still be at 0,0,0. (x,y,z)