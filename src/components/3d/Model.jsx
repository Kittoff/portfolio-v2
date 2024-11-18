import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export const Model = () => {
  const texture = useLoader(THREE.TextureLoader, "/test.jpg");
  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
