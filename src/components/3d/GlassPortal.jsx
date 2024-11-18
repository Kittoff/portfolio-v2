import {
  MeshTransmissionMaterial,
  RoundedBox,
  useTexture,
  useFBO,
} from "@react-three/drei";
import { Asuka } from "./Asuka";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const GlassPortal = () => {
  const normalMap = useTexture("dirt1.png");
  normalMap.wrapS = normalMap.wrapT = 1000;
  const asukaRef = useRef();
  const glassref = useRef();
  const buffer = useFBO();

  useFrame((state) => {
    asukaRef.current.visible = true;
    glassref.current.visible = false;
    state.gl.setRenderTarget(buffer);
    state.gl.render(state.scene, state.camera);
    state.gl.setRenderTarget(null);
    asukaRef.current.visible = false;
    glassref.current.visible = true;
  });

  return (
    <>
      <group ref={asukaRef}>
        <Asuka position={[0, -1.2, -0.5]} scale={1.4} />
      </group>

      <RoundedBox
        ref={glassref}
        position={[0, 0, 0.8]}
        args={[1.5, 2, 0.12]}
        radius={0.03}
      >
        <MeshTransmissionMaterial
          transmission={1}
          roughness={0.1}
          thickness={0.1}
          normalMap={normalMap}
          normalScale={[0.4, 0.4]}
          buffer={buffer.texture}
        />
      </RoundedBox>
    </>
  );
};

export default GlassPortal;
