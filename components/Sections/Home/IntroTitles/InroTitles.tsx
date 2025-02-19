import { motion, useTransform } from 'motion/react';
import classes from './IntroTitles.module.css';

interface TextData {
  id: number;
  text: string;
}

// interface IntroTitlesProps {
//   scrollEffect_Fill: string;
//   scrollMask: string;
// }

function IntroTitles({ scrollYProgressHomeInter, scrollYProgressHomeInterB }: any) {
  const textdata: TextData[] = [
    { id: 1, text: 'frontend developer' },
    { id: 2, text: 'motion graphics' },
    { id: 3, text: '3d artist' },
  ];

  const scrollMaskReveal = useTransform(
    scrollYProgressHomeInter,
    [0.25, 1],
    ['inset(0 100% 0 0)', 'inset(0 0.5% 0 0)']
  );
  // const scrollMaskFillReveal = useTransform(
  //   scrollYProgressHomeInter,
  //   [0.5, 1],
  //   ['inset(0 0 0 0)', 'inset(0 0 0 100%)']
  // );
  const scrollMaskFillReveal = useTransform(
    scrollYProgressHomeInterB,
    [0.5, 1],
    ['inset(0 0 0 0)', 'inset(0 0 0 100%)']
  );

  return (
    <motion.div className={classes.container}>
      {textdata.map((text) => (
        <motion.div key={text.id} className={classes.title} style={{ clipPath: scrollMaskReveal }}>
          <span className={classes.text}>
            {text.text}
            <motion.span
              className={classes.fill}
              style={{ clipPath: scrollMaskFillReveal }}
              // style={{ scaleX: scrollEffect_Fill }}
            />
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default IntroTitles;
