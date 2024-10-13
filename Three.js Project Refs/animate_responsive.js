import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// keep the view looking nice when resized. Note: margins and scroll were removed in css
window.addEventListener('resize', () => {
    // upadte sizes
    sizes.width = window.innerWidth // get current window sizes
    sizes.height = window.innerHeight

    // update camera
    camera.aspect = sizes.width / sizes.height // update aspect ratio
    camera.updateProjectionMatrix() // update camera

    // update renderer
    renderer.setSize(sizes.width, sizes.height) // update renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // set max pixel ratio to 2. more is unesscary
})
// making it play nice on safari, chrome, firefox, and edge 
window.addEventListener('dblclick', () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement // check if fullscreen element exists
    if(!fullscreenElement) {
        if(canvas.requestFullscreen){
            canvas.requestFullscreen() // request fullscreen for canvas
        }     
        else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen() // exit fullscreen, press escape
        }
    }
    else {
        if(document.exitFullscreen){
            document.exitFullscreen() // exit fullscreen, press escape
        }
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen() // exit fullscreen, press escape
        }
    }
})

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// animation
const clock = new THREE.Clock()

const cubeloop = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call cubeloop again on the next frame
    window.requestAnimationFrame(cubeloop)
}

cubeloop()
