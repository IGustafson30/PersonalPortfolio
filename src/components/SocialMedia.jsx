import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LinkedIn from './LinkedIn';

const SocialMedia = () => {
    return(
        <Canvas camera={{fov: 120, position: [1, 0, 4] }}>
            <Stage environment="city" intensity={0.6}>
            <LinkedIn/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default SocialMedia;