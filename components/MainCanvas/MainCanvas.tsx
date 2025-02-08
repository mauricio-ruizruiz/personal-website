import { Suspense, useRef } from 'react';
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
          children={undefined}
        ></Canvas>
      </section>
    </>
  );
}

export default MainCanvas;
