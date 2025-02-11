import { Suspense, useRef } from 'react';
import { Html, OrbitControls, Text, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import classes from './MainCanvas.module.css';

function MainCanvas({ appContainerRef, homeTop }: any) {
  const canvasContainerRef = useRef(null);
  const created = () => {
    console.log('created');
  };
  // Scroll Progress
  const { scrollYProgress } = useScroll({
    container: appContainerRef,
    target: homeTop,
    offset: ['start end', 'end end'],
    layoutEffect: false,
  });
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
          <ambientLight />
          <g>
            <mesh>
              <boxGeometry args={[3, 1, 1]} />
            </mesh>
            <mesh position={[0, -1.25, 0]}>
              <boxGeometry args={[1, 1, 3]} />
            </mesh>
          </g>
        </Canvas>
      </section>
    </>
  );
}

export default MainCanvas;
