import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export const Model = ({ scale }) => {
  const texture = useLoader(THREE.TextureLoader, "/test3.jpg");
  return (
    <mesh scale={scale}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
