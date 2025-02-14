import { motion } from 'motion/react';
import classes from './FrontIntroTitles.module.css';

function FrontIntroTitles({ y }) {
  return (
    <>
      <motion.div>
        <h2 className={classes.title}>
          <span className={classes.text} style={{ y: y }}>
            FrontEnd Developer
          </span>
        </h2>
        <h2 className={classes.title}>
          <span className={classes.text} style={{ y: y }}>
            Motion graphics
          </span>
        </h2>
        <h2 className={classes.title}>
          <span className={classes.text} style={{ y: y }}>
            3d Artist
          </span>
        </h2>
      </motion.div>
    </>
  );
}

export default FrontIntroTitles;
