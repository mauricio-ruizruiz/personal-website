import { Suspense, useRef } from 'react';
import { Html, OrbitControls, Text, Text3D, useFont } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import FrontIntroTitles from '../Sections/SectionHome/FrontIntroTitles/FrontIntroTitles';
import HomeTitleName from '../Sections/SectionHome/HomeTitleName/HomeTitleName';
import classes from './MainCanvas.module.css';

function MainCanvas({ appContainerRef, homeTop, scrollHome }: any) {
  const canvasContainerRef = useRef(null);
  const created = () => {
    console.log('created');
  };
  // const antaFont = useFont('./fonts/Anta_Regular.json');
  const variants = {
    hidden: { x: 0 },
    visible: { x: 1 },
  };
  const x = useTransform(scrollHome, [0, 1], [0, Math.PI * -0.5]);
  const y = useTransform(scrollHome, [0, 1], ['0%', '100%']);
  return (
    <>
      <section className={classes.canvas} ref={canvasContainerRef}>
        <Canvas onCreated={created} camera={{ fov: 32, position: [0, 0, 20] }} flat>
          {/* <OrbitControls /> */}
          <motion.group
            position={[0, 1, -0.5]}
            rotation-x={Math.PI * -0.5}
            // anchorX={'center'}
          >
            <Html>
              <HomeTitleName y={y} />
            </Html>
          </motion.group>
          <Html position={[1, 2.5, 0]} center>
            <FrontIntroTitles y={y} />
          </Html>

          <ambientLight />

          <motion.group position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[x, 0, 0]}>
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
