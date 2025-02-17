import { MutableRefObject, Suspense, useRef } from 'react';
import { Html, OrbitControls, Text, Text3D, useFont } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { MotionValue, useMotionValue, useScroll, useTransform } from 'motion/react';
import FrontIntroTitles from '../Sections/SectionHome/FrontIntroTitles/FrontIntroTitles';
import HomeTitleName from '../Sections/SectionHome/HomeTitleName/HomeTitleName';
import classes from './MainCanvas.module.css';

interface MainCanvasProps {
  appContainerRef: MutableRefObject<HTMLElement | null>;
  homeTop: number;
  scrollYHome: MotionValue<number>;
}

function MainCanvas({ appContainerRef, homeTop, scrollYHome }: MainCanvasProps) {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const created = () => {
    console.log('created');
  };

  const variants = {
    hidden: { x: 0 },
    visible: { x: 1 },
  };
  const xm = useMotionValue(0);
  const x = useTransform(scrollYHome, [0, 1], [0, Math.PI * -0.5]);
  const y = useTransform(scrollYHome, [0, 1], ['0%', '100%']);
  const posYEffect = useTransform(scrollYHome, [0, 1], [0, -1]);
  const scaleXScrollEffect = useTransform(scrollYHome, [0, 1], [1, 0]);
  const scrollEffect_Fill = useTransform(
    scrollYHome,
    [0.5, 1],
    ['inset(0 0 0 0)', 'inset(0 0 0 100%)']
  );
  // const scrollMaskEffects = useTransform(scrollYHome, [0, 1], [0, 1]);
  const scrollMaskEffects = useTransform(
    scrollYHome,
    [0, 1],
    ['inset(0 100% 0 0)', 'inset(0 0.5% 0 0)']
  );

  return (
    <section className={classes.canvas} ref={canvasContainerRef}>
      <Canvas onCreated={created} camera={{ fov: 32, position: [0, 0, 20] }} flat>
        {/* <OrbitControls /> */}
        <motion.group position={[0, 1, -0.5]} rotation-x={Math.PI * -0.5}>
          <Html>
            <HomeTitleName y={y} />
          </Html>
        </motion.group>

        <Html position={[0.5, 1.85, 0]} center>
          <FrontIntroTitles
            y={y}
            scrollMaskEffects={scrollMaskEffects}
            scrollEffect_Fill={scrollEffect_Fill}
            // scrollEffect_Fill={scaleXScrollEffect}
          />
        </Html>

        <ambientLight />

        <motion.group position={[0, posYEffect, 0]} scale={[1, 1, 1]} rotation={[x, 0, 0]}>
          <motion.mesh>
            <boxGeometry args={[3, 1, 1]} />
          </motion.mesh>
          <mesh position={[0, -1.25, 0.5]}>
            <boxGeometry args={[1, 1, 1.5]} />
          </mesh>
        </motion.group>
      </Canvas>
    </section>
  );
}

export default MainCanvas;
