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

// Clock
const clock = new THREE.Clock()


// Animation
const cubeloop = () => 
    {
        const elapsedTime = clock.getElapsedTime() // starts at 0, gets the time since last frame

        // update cube

        // use the camera movement to animate
        camera.position.x = Math.sin(elapsedTime)
        camera.position.y = Math.cos(elapsedTime)
        camera.position.z = Math.cos(elapsedTime) + 2
        camera.lookAt(mesh.position)

        
        // Move the cube in a cricle repeatedly
        // mesh.position.y = Math.sin(elapsedTime)
        // mesh.position.x = Math.cos(elapsedTime)

        // Rotate the cube
        // mesh.rotation.x = elapsedTime
        // mesh.rotation.y = elapsedTime

        // 1 revolution per second would be:
        // mesh.rotation.y = elapsedTime * Math.PI * 2
        // mesh.rotation.x = elapsedTime * Math.PI * 2

        // This time control will allow the animation to be the same regaurdless of frame rate!

        // renderer 
        renderer.render(scene, camera)
        window.requestAnimationFrame(cubeloop) // frames per second(maybe 60?), calls funciton every frame
    }
cubeloop()
