import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Chair from './Chair';

const Illustration = () => {
    return(
        <Canvas camera={{position: [2, 0, 5] }}>
            <Stage environment="city" intensity={0.6}>
            <Chair/>
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default Illustration;