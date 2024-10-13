import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// mesh postion
// mesh.position.x = 0.7 // decide what unit of measure you are using
// mesh.position.y = -0.6  // position object before you render it
// mesh.position.z = 1  // position is inherited from vector3, which hs alot of methods
mesh.position.set(0.7, -0.6, 1) // shorthand for the above

// scale
// mesh.scale.x = 2 // scale the object, default is 1
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5) // shorthand for the above

// rotation - think in terms of pi (euler)
// mesh.rotation.reorder('YXZ') // change the order of rotation, default is XYZ
// if one asix is not working, you are in a gimbol lock. changing the order of rotation can help. reorder must come first.
// half a rotation is 2 * Math.PI
mesh.rotation.y = Math.PI / 2
mesh.rotation.x = Math.PI / 2
// quaternion - another way to rotate objects

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

camera.lookAt(mesh.position) // look at the object

// console.log(mesh.position.distanceTo(camera.position)) // distance of object to camera. must be done after the camera

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)