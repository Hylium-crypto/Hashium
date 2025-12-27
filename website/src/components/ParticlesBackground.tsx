
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
    count?: number;
}

// Pre-generate positions outside of component to avoid impure function calls during render
const generatePositions = (count: number): Float32Array => {
    const positions = new Float32Array(count * 3);
    // Use a seeded approach for deterministic results
    const seed = 12345;
    const seededRandom = (i: number) => {
        const x = Math.sin(seed + i) * 10000;
        return x - Math.floor(x);
    };
    for (let i = 0; i < count; i++) {
        const r = 20 * Math.cbrt(seededRandom(i * 3));
        const theta = seededRandom(i * 3 + 1) * 2 * Math.PI;
        const phi = Math.acos(2 * seededRandom(i * 3 + 2) - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
};

const ParticleField: React.FC<ParticleFieldProps> = ({ count = 2000 }) => {
    const ref = useRef<THREE.Points>(null);

    const positions = useMemo(() => generatePositions(count), [count]);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30;
            ref.current.rotation.y -= delta / 40;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const ParticlesBackground: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'radial-gradient(circle at 50% 50%, #111111 0%, #000000 100%)'
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default ParticlesBackground;
