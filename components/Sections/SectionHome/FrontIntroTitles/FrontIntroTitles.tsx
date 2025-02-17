import { motion } from 'framer-motion';
import classes from './FrontIntroTitles.module.css';

interface TextData {
  id: number;
  text: string;
}

// interface FrontIntroTitlesProps {
//   scrollEffect_Fill: string;
//   scrollMask: string;
// }

function FrontIntroTitles({ scrollEffect_Fill, scrollMaskEffects }: any) {
  const textdata: TextData[] = [
    { id: 1, text: 'frontend developer' },
    { id: 2, text: 'motion graphics' },
    { id: 3, text: '3d artist' },
  ];

  return (
    <motion.div className={classes.container}>
      {textdata.map((text) => (
        <motion.div
          key={text.id}
          className={classes.title}
          // style={{ clipPath: scrollEffect_Fill }}
          // style={{ clipPath: scrollEffect_Fill }}
          style={{ clipPath: scrollMaskEffects }}
          // style={{ scaleX: scrollMaskEffects, originX: 0 }}
          // style={}
        >
          <span className={classes.text}>
            {text.text}
            <motion.span
              className={classes.fill}
              style={{ clipPath: scrollEffect_Fill }}
              // style={{ scaleX: scrollEffect_Fill }}
            />
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default FrontIntroTitles;
