import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Time
let time = Date.now() // set as beginning reference point

// Animation
const cubeloop = () => 
    {
        // time
        const currentTime = Date.now()
        const deltaTime = currentTime - time // the time that has elapsed since the last frame
        time = currentTime // update time

        console.log(deltaTime)

        // update cube

        mesh.rotation.x += 0.001 * deltaTime // smaller number is slower
        mesh.rotation.y += 0.002 * deltaTime

        // This time control will allow the animation to be the same regaurdless of frame rate!

        // renderer 
        renderer.render(scene, camera)
        window.requestAnimationFrame(cubeloop) // frames per second(maybe 60?), calls funciton every frame
    }
cubeloop()
