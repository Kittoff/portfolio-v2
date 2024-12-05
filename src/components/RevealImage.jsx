import { shaderMaterial, useAspect, useTexture } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import imageRevealFragmentShader from "../shaders/imageReveal/fragment.glsl";
import imageRevealVertexShader from "../shaders/imageReveal/vertex.glsl";

const ImageRevealMaterial = shaderMaterial(
  {
    uTexture: new THREE.Texture(),
    uTime: 0,
    uProgress: 0,
    uImageRes: new THREE.Vector2(1.0, 1.0),
    uRes: new THREE.Vector2(1.0, 1.0),
  },
  imageRevealVertexShader,
  imageRevealFragmentShader,
  (self) => {
    self.transparent = true;
  },
);

extend({ ImageRevealMaterial });

const RevealImage = ({ imageTexture, revealProgress }) => {
  const materialRef = useRef();

  // LOADING TEXTURE & HANDLING ASPECT RATIO
  const texture = useTexture(imageTexture, (loadedTexture) => {
    if (materialRef.current) {
      materialRef.current.uTexture = loadedTexture;
    }
  });
  const { width, height } = texture.image;
  const scale = useAspect(width, height, 0.45);

  // GETTING VIEWPORT SIZE
  const { viewport } = useThree();

  // UPDATING UNIFORMS ON RESIZE TO MAINTAIN ASPECT RATIO
  useEffect(() => {
    const viewportScale = [viewport.width, viewport.height, 1];

    if (materialRef.current) {
      materialRef.current.uImageRes.set(width, height);
    }
  }, [scale, viewport.width, viewport.height, width, height]);

  // UPDATING UNIFORMS
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.elapsedTime;
      materialRef.current.uProgress = revealProgress;
    }
  });

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <imageRevealMaterial attach="material" ref={materialRef} />
    </mesh>
  );
};

export default RevealImage;

RevealImage.propTypes = {
  imageTexture: PropTypes.string.isRequired,
  revealProgress: PropTypes.object.isRequired,
  isFullScreen: PropTypes.bool,
};
