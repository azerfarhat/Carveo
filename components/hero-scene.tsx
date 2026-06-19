'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Ring, Torus } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere({ position, scale, speed = 1, color, delay = 0 }: {
  position: [number, number, number]
  scale: number
  speed?: number
  color: string
  delay?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay
      meshRef.current.rotation.x = t * 0.15 * speed
      meshRef.current.rotation.y = t * 0.25 * speed
      meshRef.current.position.y = position[1] + Math.sin(t * 0.3) * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        envMapIntensity={1.5}
      />
    </Sphere>
  )
}

function AnimatedRing({ position, rotation, scale, color, speed = 0.5 }: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  color: string
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * speed
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <Ring
      ref={meshRef}
      args={[0.6, 1, 64]}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.2} transparent opacity={0.6} />
    </Ring>
  )
}

function Particles({ count = 300 }) {
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3 + Math.random() * 8
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return [pos]
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#c96442"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

function GridFloor() {
  return (
    <gridHelper
      args={[20, 40, '#c96442', '#c96442']}
      position={[0, -3, 0]}
    >
      <meshStandardMaterial transparent opacity={0.08} />
    </gridHelper>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#fdf2f0" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#c96442" />
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#c96442" />

      <AnimatedSphere position={[-3.5, 1.5, -2]} scale={1.4} speed={0.6} color="#c96442" delay={0} />
      <AnimatedSphere position={[3.5, -0.5, -3]} scale={0.9} speed={0.9} color="#d97757" delay={1.5} />
      <AnimatedSphere position={[0, 2.8, -5]} scale={0.4} speed={1.2} color="#b4552d" delay={2} />

      <AnimatedRing position={[4.5, 2.5, -6]} rotation={[1, 0.5, 0]} scale={1.8} color="#c96442" speed={0.4} />
      <AnimatedRing position={[-4.5, -1.5, -5]} rotation={[0.5, 1, 0.3]} scale={1.2} color="#d97757" speed={0.6} />
      <AnimatedRing position={[0, -2, -4]} rotation={[0.8, 0.2, 0.5]} scale={1} color="#b4552d" speed={0.3} />

      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={1}>
        <Torus
          args={[1.2, 0.06, 32, 64]}
          position={[-2, -1.5, -4]}
          scale={0.7}
        >
          <meshStandardMaterial color="#c96442" metalness={0.8} roughness={0.2} transparent opacity={0.4} />
        </Torus>
      </Float>

      <Float speed={1} rotationIntensity={0.4} floatIntensity={1.2}>
        <Torus
          args={[1.2, 0.06, 32, 64]}
          position={[2.5, 2, -5]}
          scale={0.5}
        >
          <meshStandardMaterial color="#d97757" metalness={0.8} roughness={0.2} transparent opacity={0.4} />
        </Torus>
      </Float>

      <GridFloor />
      <Particles count={400} />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 1, 7], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background pointer-events-none" />
    </div>
  )
}
