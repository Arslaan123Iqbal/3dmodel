import {
  Environment,
  PresentationControls,
  useGLTF
} from "@react-three/drei";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import React from "react";

const Model = () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco-gltf/");
  const model = useGLTF("/model.glb", dracoLoader);

  return (
    <>
      <Environment preset="warehouse" />

      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive object={model.scene} position-y={-1.2}></primitive>
      </PresentationControls>
    </>
  );
};

export default Model;
