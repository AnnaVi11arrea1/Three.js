import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Grouping Objects
const group = new THREE.Group() // group objects together
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group) // add group to scene

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // instantiate the nesh inside the object
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1) // add to group

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // instantiate the nesh inside the object
    new THREE.MeshBasicMaterial({ color: 0xffff00 })
)
cube2.position.x = 2 // move the cube to the left, declared after the mesh
group.add(cube2) // add to group

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // instantiate the nesh inside the object
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube3.position.x = -2
 // move the cube to the left, declared after the mesh
group.add(cube3) // add to group

// axes helper
const axeshelper = new THREE.AxesHelper() // pass a number to change the length of the axeshelper
scene.add(axeshelper)

// mesh.position.set(0.7, -0.6, 1) // set position of object, shorhand for the above
// console.log(mesh.position.length()) // distance from the origin
// mesh.position.normalize() // normalize the position, takes the length and reduces it until the distance is 1

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)



// console.log(mesh.position.distanceTo(camera.position)) // distance of object to camera. must be done after the camera

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)