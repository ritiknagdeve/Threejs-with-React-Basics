
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls, Sparkles} from '@react-three/drei'
import React, { useRef } from 'react'

const RotatingCube = () => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 2, 6]} />
      <meshLambertMaterial color={0x4CAF50} emissive={0x4CAF50} />
      <Sparkles count={100} scale={1} size={1} speed={0.001} color={0x4CAF50} />
    </mesh>
  )
}


const App = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[10, 10, 10]} intensity={20} color={0x4CAF50} />
      <color attach="background" args={['#F0F0F0']} />

      <RotatingCube />
    </Canvas>
  )
}

export default App