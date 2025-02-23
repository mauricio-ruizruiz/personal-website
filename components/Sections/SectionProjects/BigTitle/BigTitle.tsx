import { motion, useTransform } from 'motion/react';
import classes from './BigTitle.module.css';

function BigTitle({ projectsBigTitleRef, scrollYProgressProjectsBigTitle }: any) {
  const titleText = 'Projects';

  const scrollXTitle = useTransform(scrollYProgressProjectsBigTitle, [0, 1], ['100vw', '-250vw']);

  return (
    <>
      <div className={classes.big_Title_container} ref={projectsBigTitleRef}>
        <motion.span
          className={classes.title}
          style={{
            x: scrollXTitle,
            y: '-50%',
          }}
        >
          {titleText}
        </motion.span>
      </div>
    </>
  );
}

export default BigTitle;
