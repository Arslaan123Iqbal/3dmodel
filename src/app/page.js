"use client";
import { Suspense } from "react";
import { Html, useProgress } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "@/components/Model";



function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed()}%</Html>
}


const Home = () => {
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      {" "}
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model/>
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
