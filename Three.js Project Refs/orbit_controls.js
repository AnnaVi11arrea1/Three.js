import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// cursor
const cursor = {
    x: 0,
    y: 0
}

// Sizes
const sizes = {
    width: 800,
    height: 600
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.height - 0.5)
})

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRatio,
//      1 * aspectRatio, 
//      1, 
//      -1, 
//      0.1, 
//      100) // Left, Right, Top, Bottom, Near, Far
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
scene.add(camera)

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

// array camera - multiple camera views
// steroe camera - two cameras make the view look like if you were looking through two eyes, feeling of depth
// cube camera - 6 renders, one for each face of a cube, used for reflections, maps the environment around the object
// orthographic camera - render the scene without perspective
// perspective camera - render the scene with perspective

// field of view is degrees, here, it is set to 75 degrees. the first param in the camera
// aspect ratio is the width divided by the height, here, it is 800/600. the second param in the camera
// the last to params are near and far. 

