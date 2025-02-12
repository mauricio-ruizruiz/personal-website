import { Suspense, useRef } from 'react';
import { Html, OrbitControls, Text, Text3D, useFont } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import classes from './MainCanvas.module.css';

function MainCanvas({ appContainerRef, homeTop, scrollHome }: any) {
  const canvasContainerRef = useRef(null);
  const created = () => {
    console.log('created');
  };

  // Anta FontLoader
  // const antaFont = useFont('./fonts/Anta_Regular.json');
  // useFont.preload('./fonts/Anta_Regular.json');
  const variants = {
    hidden: { x: 0 },
    visible: { x: 1 },
  };
  // Scroll Progress
  // const { scrollYProgress } = useScroll({
  //   container: appContainerRef,
  //   target: homeTop,
  //   offset: ['start', 'start end'],
  //   layoutEffect: false,
  // });
  const x = useTransform(scrollHome, [0, 1], [0, Math.PI * -0.5]);
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
          {/* <OrbitControls /> */}
          <motion.group position={[0, 1, -0.5]} rotateX={x} anchorX={'center'}>
            <Text
              fontSize={0.35}
              textAlign="center"
              anchorX={'center'}
              // font="./fonts/anta-v1-latin-regular.woff2"
              // font={'./fonts/Anta_Regular.json'}
            >
              mauricio ruiz ruiz
            </Text>
          </motion.group>

          <ambientLight />
          {/* <Html position={[0, 1, 0]} center={true}>
            <h1 style={{ width: 'max-content', fontSize: '2.5rem' }}>mauricio ruiz ruiz</h1>
          </Html> */}

          <motion.group
            position={[0, 0, 0]}
            scale={[1, 1, 1]}
            rotateX={x}
            // rotation-x={x}
            // initial="hidden"
            // animate="visible"
            // variants={variants}
          >
            <mesh>
              <boxGeometry args={[3, 1, 1]} />
            </mesh>
            <mesh position={[0, -1.25, 0.5]}>
              <boxGeometry args={[1, 1, 1.5]} />
            </mesh>
          </motion.group>
        </Canvas>
      </section>
    </>
  );
}

export default MainCanvas;
