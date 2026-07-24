"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type SeatColor = "black" | "brown" | "red";
export type SeatMaterial = "leather" | "suede" | "carbon";
export type Stitching = "diamond" | "straight";

export type Accessories = {
  crashGuard: boolean;
  phoneHolder: boolean;
  backrest: boolean;
};

const COLOR_HEX: Record<SeatColor, string> = {
  black: "#161616",
  brown: "#6b4028",
  red: "#8c1f1f",
};

function materialProps(material: SeatMaterial, color: string) {
  switch (material) {
    case "leather":
      return { color, roughness: 0.45, metalness: 0.08, clearcoat: 0.4, clearcoatRoughness: 0.3 };
    case "suede":
      return { color, roughness: 0.95, metalness: 0.0, clearcoat: 0, clearcoatRoughness: 1 };
    case "carbon": {
      const base = new THREE.Color("#1c1d20");
      const tint = new THREE.Color(color);
      base.lerp(tint, 0.22);
      return {
        color: `#${base.getHexString()}`,
        roughness: 0.3,
        metalness: 0.55,
        clearcoat: 0.6,
        clearcoatRoughness: 0.15,
      };
    }
  }
}

function Stitches({ pattern, width, length }: { pattern: Stitching; width: number; length: number }) {
  const stitches = useMemo(() => {
    const arr: { pos: [number, number, number]; rot: [number, number, number]; len: number }[] = [];
    if (pattern === "straight") {
      const rows = 4;
      for (let i = 0; i < rows; i++) {
        const z = -length / 2 + (length / (rows - 1)) * i + length * 0.06;
        arr.push({ pos: [0, 0.041, z], rot: [0, 0, 0], len: width * 0.86 });
      }
    } else {
      const cols = 6;
      for (let i = 0; i < cols; i++) {
        const x = -width / 2 + (width / (cols - 1)) * i;
        arr.push({ pos: [x, 0.041, 0], rot: [0, Math.PI / 4, 0], len: length * 0.5 });
        arr.push({ pos: [x, 0.041, 0], rot: [0, -Math.PI / 4, 0], len: length * 0.5 });
      }
    }
    return arr;
  }, [pattern, width, length]);

  return (
    <group>
      {stitches.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot}>
          <boxGeometry args={[s.len, 0.006, 0.012]} />
          <meshStandardMaterial color="#e8e3d8" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <torusGeometry args={[0.55, 0.14, 20, 40]} />
        <meshStandardMaterial color="#0e0e10" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.06, 24]} />
        <meshStandardMaterial color="#2b2c31" roughness={0.4} metalness={0.7} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, (i / 8) * Math.PI * 2]}>
          <boxGeometry args={[0.025, 0.38, 0.025]} />
          <meshStandardMaterial color="#9a9aa2" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export default function BikeModel({
  seatColor,
  seatMaterial,
  stitching,
  accessories,
}: {
  seatColor: SeatColor;
  seatMaterial: SeatMaterial;
  stitching: Stitching;
  accessories: Accessories;
}) {
  const group = useRef<THREE.Group>(null);
  const mat = materialProps(seatMaterial, COLOR_HEX[seatColor]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* wheels */}
      <Wheel position={[-1.55, 0, 0]} />
      <Wheel position={[1.5, 0, 0]} />

      {/* frame */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <boxGeometry args={[2.7, 0.09, 0.1]} />
        <meshStandardMaterial color="#d5d6da" metalness={0.75} roughness={0.25} />
      </mesh>
      <mesh position={[-1.0, 0.85, 0]} rotation={[0, 0, 0.55]} castShadow>
        <boxGeometry args={[1.05, 0.08, 0.09]} />
        <meshStandardMaterial color="#d5d6da" metalness={0.75} roughness={0.25} />
      </mesh>
      <mesh position={[0.95, 0.8, 0]} rotation={[0, 0, -0.7]} castShadow>
        <boxGeometry args={[0.95, 0.08, 0.09]} />
        <meshStandardMaterial color="#d5d6da" metalness={0.75} roughness={0.25} />
      </mesh>

      {/* engine block */}
      <mesh position={[-0.15, 0.35, 0]} castShadow>
        <boxGeometry args={[0.75, 0.5, 0.55]} />
        <meshStandardMaterial color="#232427" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[-0.15, 0.35, 0]}>
        <boxGeometry args={[0.78, 0.08, 0.58]} />
        <meshStandardMaterial color="#3a3c42" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* fuel tank */}
      <mesh position={[-0.55, 1.0, 0]} castShadow>
        <sphereGeometry args={[0.4, 24, 16]} />
        <meshStandardMaterial color="#c0301e" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* seat */}
      <group position={[0.35, 1.12, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.15, 0.16, 0.62]} />
          <meshPhysicalMaterial {...mat} />
        </mesh>
        <Stitches pattern={stitching} width={1.05} length={0.55} />
      </group>

      {/* handlebars */}
      <mesh position={[-1.2, 1.35, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 12]} />
        <meshStandardMaterial color="#2b2c31" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[-1.2, 1.0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.45, 12]} />
        <meshStandardMaterial color="#2b2c31" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* exhaust */}
      <mesh position={[0.9, 0.25, 0.25]} rotation={[0, 0.1, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.09, 0.9, 16]} />
        <meshStandardMaterial color="#c7c8cc" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* --- accessories --- */}
      {accessories.crashGuard && (
        <group position={[-0.15, 0.15, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <torusGeometry args={[0.62, 0.035, 12, 32, Math.PI]} />
            <meshStandardMaterial color="#111214" metalness={0.6} roughness={0.35} />
          </mesh>
        </group>
      )}

      {accessories.phoneHolder && (
        <group position={[-1.05, 1.42, 0.12]}>
          <mesh castShadow>
            <boxGeometry args={[0.03, 0.28, 0.03]} />
            <meshStandardMaterial color="#1a1a1c" metalness={0.5} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.16, 0]} rotation={[0.25, 0, 0]}>
            <boxGeometry args={[0.16, 0.28, 0.02]} />
            <meshStandardMaterial color="#0c0c0e" metalness={0.3} roughness={0.6} />
          </mesh>
        </group>
      )}

      {accessories.backrest && (
        <group position={[1.05, 1.35, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.06, 0.5, 0.5]} />
            <meshStandardMaterial color="#2b2c31" metalness={0.6} roughness={0.4} />
          </mesh>
          <mesh position={[0.06, 0.05, 0]}>
            <boxGeometry args={[0.1, 0.4, 0.42]} />
            <meshPhysicalMaterial color={COLOR_HEX[seatColor]} roughness={0.6} clearcoat={0.2} />
          </mesh>
        </group>
      )}
    </group>
  );
}
