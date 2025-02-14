import React from 'react';
import { delay, motion } from 'framer-motion';
import classes from './HomeTitleName.module.css';

const variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: { clipPath: 'inset(0 0 0 0)', transition: { duration: 1.2, delay: 1 } },
  //   visible: { y: 0, transition: { duration: 1.5 } },
};

const HomeTitleName: React.FC = ({ y }) => {
  return (
    <motion.div
      layout
      //  initial="hidden"
      //  animate="visible"
      //  variants={variants}
      className={classes.container}
    >
      <motion.h1
        className={classes.name}
        style={{ y: y }}
        //    initial="hidden"
        //    animate="visible"
        //    variants={{
        //      hidden: { y: '100%' },
        //      visible: { y: '0%', transition: { duration: 0.5, ease: 'easeInOut' } },
        //    }}
      >
        mauricio ruiz ruiz
      </motion.h1>
    </motion.div>
  );
};

export default HomeTitleName;
