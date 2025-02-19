import React from 'react';
import { motion, useTransform } from 'motion/react';
import classes from './TitleName.module.css';

const variants = {
  hidden: { y: '100%' },
  visible: { y: '0%', transition: { duration: 1, ease: 'backOut', delay: 0.5 } },
};
const TitleName = ({ scrollYProgressHomeIntro }) => {
  const scrollYName = useTransform(scrollYProgressHomeIntro, [0, 1], ['0%', '100%']);
  return (
    <motion.div layoutRoot className={classes.container}>
      <motion.h1
        className={classes.name}
        style={{ y: scrollYName }}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        mauricio ruiz ruiz
      </motion.h1>
    </motion.div>
  );
};

export default TitleName;
