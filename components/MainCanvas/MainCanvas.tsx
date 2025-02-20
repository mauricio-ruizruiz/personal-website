import { MutableRefObject, Suspense, useRef } from 'react';
import { Html, OrbitControls, Text, Text3D, useFont } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { MotionValue, useMotionValue, useScroll, useTransform } from 'motion/react';
import FrontIntroTitles from '../Sections/Home/InfoTitles/FronViewTitles';
import HomeTitleName from '../Sections/Home/TitleName/TitleName';
import classes from './MainCanvas.module.css';

interface MainCanvasProps {
  appContainerRef: MutableRefObject<HTMLElement | null>;
  homeTop: number;
  scrollYProgressHomeIntro: MotionValue<number>;
  scrollYProgressHomeInter: MotionValue<number>;
}

function MainCanvas({ scrollYProgressHomeIntro, scrollYProgressHomeOutro }) {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const created = () => {
    console.log('created');
  };

  const posYSrcoll = useTransform(scrollYProgressHomeIntro, [0, 1], [0, -1]);
  const rotationXSrcoll = useTransform(scrollYProgressHomeIntro, [0, 1], [0, Math.PI * -0.5]);
  const posXOutro = useTransform(scrollYProgressHomeOutro, [0, 1], [0, -10]);

  return (
    <section className={classes.canvas} ref={canvasContainerRef}>
      <Canvas onCreated={created} camera={{ fov: 32, position: [0, 0, 20] }} flat>
        {/* <OrbitControls /> */}
        {/* <motion.group position={[0, 1, -0.5]} rotation-x={Math.PI * -0.5}>
          <Html>
            <HomeTitleName y={y} />
          </Html>
        </motion.group> */}

        {/* <Html position={[0.5, 1.85, 0]} center>
          <FrontIntroTitles
            y={y}
            scrollMaskEffect={scrollMaskEffect}
            scrollEffect_Fill={scrollEffect_Fill}
            // scrollEffect_Fill={scaleXScrollEffect}
          />
        </Html> */}

        <ambientLight />

        <motion.group
          position={[posXOutro, posYSrcoll, 0]}
          scale={[1, 1, 1]}
          rotation={[rotationXSrcoll, 0, 0]}
        >
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
