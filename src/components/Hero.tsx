import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import * as THREE from 'three';

const ParticleNetwork = ({ count = 100 }) => {
    const [points, setPoints] = useState<{ position: THREE.Vector3; velocity: THREE.Vector3 }[]>([]);

    useEffect(() => {
        const p = new Array(count).fill(0).map(() => ({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ),
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01
            )
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setPoints(p);
    }, [count]);

    const linesGeometryRef = useRef<THREE.BufferGeometry>(null);
    const pointsRef = useRef<THREE.Points>(null);

    useFrame(() => {
        // Update positions
        points.forEach(point => {
            point.position.add(point.velocity);

            // Bounce off bounds
            if (point.position.x > 5 || point.position.x < -5) point.velocity.x *= -1;
            if (point.position.y > 5 || point.position.y < -5) point.velocity.y *= -1;
            if (point.position.z > 5 || point.position.z < -5) point.velocity.z *= -1;
        });

        // Update points
        if (pointsRef.current) {
            const positions = new Float32Array(count * 3);
            points.forEach((p, i) => {
                positions[i * 3] = p.position.x;
                positions[i * 3 + 1] = p.position.y;
                positions[i * 3 + 2] = p.position.z;
            });
            pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        }

        // Connect lines
        if (linesGeometryRef.current) {
            const positions: number[] = [];

            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dist = points[i].position.distanceTo(points[j].position);
                    if (dist < 2) { // Connection threshold
                        positions.push(
                            points[i].position.x, points[i].position.y, points[i].position.z,
                            points[j].position.x, points[j].position.y, points[j].position.z
                        );
                    }
                }
            }

            linesGeometryRef.current.setAttribute(
                'position',
                new THREE.Float32BufferAttribute(positions, 3)
            );
        }
    });

    return (
        <group>
            {/* Points */}
            <points ref={pointsRef}>
                <bufferGeometry />
                <pointsMaterial
                    size={0.05}
                    color="#818cf8" // Indigo-400
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                />
            </points>

            {/* Lines */}
            <lineSegments>
                <bufferGeometry ref={linesGeometryRef} />
                <lineBasicMaterial
                    color="#6366f1" // Indigo-500
                    transparent
                    opacity={0.2}
                    linewidth={1}
                />
            </lineSegments>
        </group>
    );
};

const Hero = () => {
    return (
        <section id="home" className="h-screen relative w-full overflow-hidden bg-slate-950">
            {/* Radial Gradient Background - Deep Purple/Black */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/50 via-slate-950 to-slate-950"></div>

            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ParticleNetwork count={80} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            <span className="text-indigo-300 font-medium text-sm tracking-wide">Available for Freelance Work</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">Soumya Chakraborty</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        A <span className="text-indigo-300 font-semibold">3rd Year B.Tech CSE Student</span> creating intuitive digital experiences.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all hover:scale-105">
                            View My Work
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:scale-105">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    <ArrowDown size={32} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
