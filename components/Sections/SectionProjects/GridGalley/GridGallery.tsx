import { motion, useTransform } from 'motion/react';
import Card from './Card/Card';
import { cardsData } from './cardsData';
import classes from './GridGallery.module.css';

function GridGallery({ galleryRef, scrollYProgressProjectsGallery }: any) {
  //Scroll Trnasformations
  const x = useTransform(scrollYProgressProjectsGallery, [0, 1], ['100%', '-100%']);
  return (
    <>
      <div className={classes.grid_gallery_container} ref={galleryRef}>
        <div className={classes.sticky}>
          <motion.div className={classes.gallery} style={{ x: x }}>
            {cardsData.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default GridGallery;
