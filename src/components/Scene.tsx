"use client";

import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingField() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 260;

  const positions = useMemo(() => {
    const rnd = mulberry32(1337); // stable seed
    const arr: Array<{ p: THREE.Vector3; r: number; s: number }> = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        p: new THREE.Vector3(
          (rnd() - 0.5) * 10,
          (rnd() - 0.5) * 6,
          (rnd() - 0.5) * 8
        ),
        r: rnd() * Math.PI * 2,
        s: 0.12 + rnd() * 0.35
      });
    }
    return arr;
  }, []);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    const px = pointer.x * 0.6;
    const py = pointer.y * 0.4;

    for (let i = 0; i < count; i++) {
      const item = positions[i];
      if (!item) continue;

      const { p, r, s } = item;
      dummy.position.set(
        p.x + Math.sin(t * 0.45 + i) * 0.05 + px,
        p.y + Math.cos(t * 0.35 + i) * 0.05 + py,
        p.z + Math.sin(t * 0.25 + i) * 0.06
      );
      dummy.rotation.set(
        r + t * 0.25,
        r * 0.3 + t * 0.18,
        r * 0.2 + t * 0.12
      );
      dummy.scale.setScalar(s + Math.sin(t + i) * 0.02);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(i, dummy.matrix);
    }
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.8}
        color={"#cdd7ff"}
        emissive={"#1b2a6a"}
        emissiveIntensity={0.35}
      />
    </instancedMesh>
  );
}

export default function Scene() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Canvas camera={{ position: [0, 0.2, 7.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 6, 6]} intensity={1.1} />
        <group>
          <FloatingField />
        </group>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
