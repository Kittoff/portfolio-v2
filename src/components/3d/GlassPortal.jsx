import {
  MeshTransmissionMaterial,
  RoundedBox,
  useTexture,
  useFBO,
  Html,
} from "@react-three/drei";
import { Model } from "./Model";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const GlassPortal = () => {
  const normalMap = useTexture("dirt1.png");
  normalMap.wrapS = normalMap.wrapT = 1000;
  const modelRef = useRef();
  const glassref = useRef();
  const buffer = useFBO();

  useFrame((state) => {
    modelRef.current.visible = true;
    glassref.current.visible = false;
    state.gl.setRenderTarget(buffer);
    state.gl.render(state.scene, state.camera);
    state.gl.setRenderTarget(null);
    modelRef.current.visible = false;
    glassref.current.visible = true;
  });

  return (
    <>
      <group ref={modelRef}>
        <Model position={[0, -1.2, -0.5]} scale={[1.4, 1.4, 1]} />
      </group>

      <group>
        <mesh>
          <RoundedBox
            ref={glassref}
            position={[0, 0, 0.8]}
            args={[1.5, 2, 0.12]}
            radius={0.03}
            scale={0.99}
          >
            <MeshTransmissionMaterial
              transmission={1}
              roughness={0.1}
              thickness={0.1}
              normalMap={normalMap}
              normalScale={[0.4, 0.4]}
              buffer={buffer.texture}
            />
            <Html
              zIndexRange={[0, 10]}
              transform={true}
              position={[-0.45, -0.7, 0]}
              scale={0.05}
              className="z-0 select-none"
            >
              Brisons <br /> la glace
            </Html>
          </RoundedBox>
        </mesh>
      </group>
    </>
  );
};

export default GlassPortal;
