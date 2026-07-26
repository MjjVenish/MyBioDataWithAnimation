'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Points, PointMaterial } from '@react-three/drei'

function createCrystalPositions() {
  const count = 800
  const array = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i += 3) {
    array[i] = (Math.random() - 0.5) * 40
    array[i + 1] = (Math.random() - 0.5) * 40
    array[i + 2] = (Math.random() - 0.5) * 40
  }
  return array
}

function CrystalParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const [positions] = useState(createCrystalPositions)

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.02
      pointsRef.current.rotation.y += delta * 0.03
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.15}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

function CrystalCluster() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.02
      groupRef.current.rotation.y += delta * 0.03
      groupRef.current.rotation.z += delta * 0.01
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central crystal */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[2, 3]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#0080ff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          toneMapped={false}
        />
      </mesh>

      {/* Surrounding crystals */}
      {[
        { pos: [3, 2, 2], color: '#a78bfa', emissive: '#7c3aed' },
        { pos: [-3, 2, -2], color: '#06b6d4', emissive: '#0891b2' },
        { pos: [2, -3, 3], color: '#fbbf24', emissive: '#d97706' },
        { pos: [-2, -3, -3], color: '#ec4899', emissive: '#be185d' },
        { pos: [3, -2, -2], color: '#34d399', emissive: '#059669' },
      ].map((crystal, i) => (
        <mesh key={i} position={[crystal.pos[0], crystal.pos[1], crystal.pos[2]]}>
          <tetrahedronGeometry args={[1.5, 2]} />
          <meshStandardMaterial
            color={crystal.color}
            emissive={crystal.emissive}
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.3}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, i) => {
        const time = state.clock.elapsedTime + i * 0.5
        child.position.y = Math.sin(time * 0.5) * 3
        child.position.x = Math.cos(time * 0.3) * 4
      })
    }
  })

  return (
    <group ref={orbsRef}>
      {[
        { pos: [-8, 0, -5], color: '#0ea5e9', size: 0.8 },
        { pos: [8, 0, -5], color: '#a855f7', size: 0.6 },
        { pos: [0, 5, -8], color: '#f59e0b', size: 0.7 },
      ].map((orb, i) => (
        <mesh key={i} position={[orb.pos[0], orb.pos[1], orb.pos[2]]}>
          <sphereGeometry args={[orb.size, 32, 32]} />
          <meshStandardMaterial
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.1}
            toneMapped={false}
          />
          <pointLight intensity={2} distance={15} color={orb.color} />
        </mesh>
      ))}
    </group>
  )
}

export default function CrystalBackground() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a0a3e 50%, #0f1f3d 100%)',
      }}
      camera={{ position: [0, 0, 12], fov: 75 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <CrystalCluster />
        <FloatingOrbs />
        <CrystalParticles />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
      </Suspense>
    </Canvas>
  )
}
