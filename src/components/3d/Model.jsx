import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export const Model = () => {
  const texture = useLoader(THREE.TextureLoader, "/test.png");
  return (
    <mesh>
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
