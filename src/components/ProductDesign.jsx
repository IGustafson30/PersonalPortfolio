import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HelloWorld from './HelloWorld';

const ProductDesign= () => {
    return(
        <Canvas camera={{position: [1, 0.25, 3] }}>
            <Stage environment="city" intensity={0.5}>
            <HelloWorld/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={false} enablePan={false}/>
        </Canvas>
    );
};

export default ProductDesign;