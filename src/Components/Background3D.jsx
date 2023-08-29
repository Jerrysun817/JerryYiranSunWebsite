/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

function Stars() {
  const { scene } = useThree();

  useEffect(() => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
    });

    const vertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    return () => scene.remove(stars); // Cleanup when unmounting
  }, [scene]);

  return null;
}

function Scene() {
  const { camera } = useThree();

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     camera.position.x += (window.innerWidth / 2 - event.clientX) * 0.001;
  //     camera.position.y += (window.innerHeight / 2 - event.clientY) * 0.001;
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [camera]);

  useFrame((state, delta) => {
    camera.rotation.y += delta * 0.01;
    camera.rotation.x += delta * 0.01;
  });

  return (
    <>
      <color attach="background" args={["#000000"]} />s
      <Stars />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
    </>
  );
}

function Background3D() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Scene />
    </Canvas>
  );
}

export default Background3D;
