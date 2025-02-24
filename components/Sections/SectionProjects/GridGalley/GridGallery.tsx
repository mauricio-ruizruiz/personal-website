import { motion, useTransform } from 'motion/react';
import Card from './Card/Card';
import classes from './GridGallery.module.css';

function GridGallery() {
  return (
    <>
      <div className={classes.grid_gallery_container}>
        <div className={classes.sticky}>
          <motion.div className={classes.gallery}>
            <Card />
            <Card />
            <Card />
            <Card />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default GridGallery;
