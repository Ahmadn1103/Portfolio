import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleBackgroundProps {
  count?: number;
  color?: string;
}

export const Particles: React.FC<ParticleBackgroundProps> = ({ count = 5000, color = "#2ecdfd" }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random particle positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005; // Slow rotation
      // Optional: Add subtle drift or movement here
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.02} // Small particle size
        color={color}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.7}
        blending={THREE.AdditiveBlending} // Glow effect
        depthWrite={false} // Prevent particles from occluding each other incorrectly
      />
    </points>
  );
};

export const ParticleBackground: React.FC<ParticleBackgroundProps> = (props) => {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles {...props} />
      </Canvas>
    </div>
  );
};
