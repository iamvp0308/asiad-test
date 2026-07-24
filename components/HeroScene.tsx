"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SpokeWheel() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z -= delta * 0.35;
  });

  const spokes = Array.from({ length: 10 });

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.09, 24, 64]} />
        <meshStandardMaterial color="#ff5a1f" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.35, 0.08, 16, 32]} />
        <meshStandardMaterial color="#eeeeee" metalness={0.8} roughness={0.2} />
      </mesh>
      {spokes.map((_, i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, (i / spokes.length) * Math.PI * 2]}
        >
          <boxGeometry args={[0.03, 1.25, 0.03]} />
          <meshStandardMaterial color="#8a8a92" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffb457" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#ff5a1f" />
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <SpokeWheel />
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}
