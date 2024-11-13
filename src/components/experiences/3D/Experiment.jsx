import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Experiment = () => {
  return (
    <>
      <mesh>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="red" />
      </mesh>
      {/* <ambientLight /> */}
      {/* <directionalLight intensity={5} position={[-2, 2, 3.5]} /> */}
    </>
  );
};

const Experience = () => {
  return (
    <div className="canvas-wrapper">
      <Canvas>
        <Experiment />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Experience;
