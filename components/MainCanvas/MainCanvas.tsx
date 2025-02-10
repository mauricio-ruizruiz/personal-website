import { Suspense, useRef } from 'react';
import { OrbitControls, Text } from '@react-three/drei';
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
          {/* <OrbitControls></OrbitControls> */}
          <mesh>
            <Text
              // font={'./fonts/anta-v1-latin-regular.woff2'}
              color="black"
              anchorX="center"
              anchorY="middle"
              position={[0, 1.5, 0]}
            >
              hello world!
            </Text>
            <boxGeometry args={[3, 1, 1]} />
          </mesh>
        </Canvas>
      </section>
    </>
  );
}

export default MainCanvas;
