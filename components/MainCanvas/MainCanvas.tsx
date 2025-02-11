import { Suspense, useRef } from 'react';
import { Html, OrbitControls, Text, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import classes from './MainCanvas.module.css';

function MainCanvas() {
  const canvasContainerRef = useRef(null);
  const created = () => {
    console.log('created');
  };
  return (
    <>
      <section className={classes.canvas} ref={canvasContainerRef}>
        <Canvas
          onCreated={created}
          // eventSource={canvasContainerRef.current}
          // eventPrefix="client"
          camera={{ fov: 32, position: [0, 0, 20] }}
          flat
          // children={undefined}
        >
          <Html position={[0, 1, 0]} center={true}>
            <h1 style={{ width: 'max-content', fontSize: '2.5rem' }}>mauricio ruiz ruiz</h1>
          </Html>
          {/* <OrbitControls></OrbitControls> */}
          {/* <Text3D font="./anta-v1-latin-regular.woff2">mauricio ruiz ruiz</Text3D> */}
          {/* <Text
            font="./anta-v1-latin-regular.woff2"
            // color="black"
            anchorX="center"
            anchorY="middle"
            position={[0, 1.5, 0]}
            textAlign="center"
          >
            mauricio ruiz ruiz
          </Text> */}
          <mesh>
            <boxGeometry args={[3, 1, 1]} />
          </mesh>
          <mesh position={[0, -1.25, 0]}>
            <boxGeometry args={[1, 1, 3]} />
          </mesh>
        </Canvas>
      </section>
    </>
  );
}

export default MainCanvas;
