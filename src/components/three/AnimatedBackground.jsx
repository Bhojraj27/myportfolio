'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 50;
      pos[i + 1] = (Math.random() - 0.5) * 50;
      pos[i + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const rand = Math.random();
      if (rand > 0.5) {
        col[i] = 0; col[i + 1] = 0.58; col[i + 2] = 0.96;
      } else {
        col[i] = 0.51; col[i + 1] = 0.55; col[i + 2] = 0.96;
      }
    }
    return col;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function FloatingOrbs() {
  const orbData = useMemo(() => [
    { pos: [5, 3, -5], color: '#3B82F6', scale: 1.5, speed: 0.5 },
    { pos: [-6, -2, -3], color: '#818CF8', scale: 2, speed: 0.3 },
    { pos: [3, -4, -7], color: '#38BDF8', scale: 1.2, speed: 0.4 },
  ], []);

  return orbData.map((orb, i) => (
    <Float key={i} speed={orb.speed} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh position={orb.pos}>
        <sphereGeometry args={[orb.scale, 32, 32]} />
        <meshStandardMaterial
          color={orb.color}
          transparent
          opacity={0.15}
          emissive={orb.color}
          emissiveIntensity={0.3}
          roughness={0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  ));
}

function NeuralNetwork() {
  const ref = useRef();

  const { nodes, lineGeometries } = useMemo(() => {
    const n = Array.from({ length: 12 }, () => [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ]);
    const lines = [];
    n.forEach((a, i) => {
      n.forEach((b, j) => {
        if (i < j) {
          const dist = Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);
          if (dist < 8) {
            const points = [new THREE.Vector3(...a), new THREE.Vector3(...b)];
            lines.push(new THREE.BufferGeometry().setFromPoints(points));
          }
        }
      });
    });
    return { nodes: n, lineGeometries: lines };
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={ref}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.6} />
        </mesh>
      ))}
      {lineGeometries.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color="#3B82F6" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  );
}

function MouseFollower() {
  const ref = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    const x = (state.pointer.x * viewport.width) / 2;
    const y = (state.pointer.y * viewport.height) / 2;
    ref.current.position.x += (x * 0.5 - ref.current.position.x) * 0.05;
    ref.current.position.y += (y * 0.5 - ref.current.position.y) * 0.05;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshBasicMaterial color="#3B82F6" transparent opacity={0.15} />
      <pointLight color="#3B82F6" intensity={2} distance={10} />
    </mesh>
  );
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.08) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-dark to-navy" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#818CF8" />
        <ParticleField />
        <FloatingOrbs />
        <NeuralNetwork />
        <MouseFollower />
        <CameraRig />
        <Stars radius={30} depth={50} count={600} factor={2} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
