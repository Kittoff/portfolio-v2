import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export const Asuka = () => {
  const texture = useLoader(THREE.TextureLoader, "/test.jpg");
  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

useGLTF.preload("/asuka.glb");
