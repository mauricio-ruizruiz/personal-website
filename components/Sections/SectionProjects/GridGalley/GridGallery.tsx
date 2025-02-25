import { useRef } from 'react';
import { color, motion, useInView, useTransform } from 'motion/react';
import Card from './Card/Card';
// import { cardsData } from './cardsData';
import classes from './GridGallery.module.css';

function GridGallery({
  appContainerRef,
  galleryRef,
  scrollYProgressProjectsGallery,
  bgSection1Ref,
  bgSection2Ref,
  bgSection3Ref,
  bgSection4Ref,
  bgSection5Ref,
  bgSection6Ref,
  scrollYProgressProjectsBgSection1,
  scrollYProgressProjectsBgSection2,
  scrollYProgressProjectsBgSection3,
  scrollYProgressProjectsBgSection4,
  scrollYProgressProjectsBgSection5,
  scrollYProgressProjectsBgSection6,
}: any) {
  //Scroll Trnasformations
  const x = useTransform(scrollYProgressProjectsGallery, [0, 1], ['50%', '-80%']);
  // const scaleCard = useTransform(scrollYProgressProjectsBgSection1, [0, 1], [0, 1]);
  const scaleCardA = useTransform(
    scrollYProgressProjectsBgSection1,
    [0, 0.25, 0.75, 1],
    [0.75, 1, 1, 0]
  );
  const scaleCardB = useTransform(
    scrollYProgressProjectsBgSection2,
    [0, 0.25, 0.75, 1],
    [0.75, 1, 1, 0]
  );
  const scaleCardC = useTransform(
    scrollYProgressProjectsBgSection3,
    [0, 0.25, 0.75, 1],
    [0.75, 1, 1, 0]
  );
  const scaleCardD = useTransform(
    scrollYProgressProjectsBgSection4,
    [0, 0.25, 0.75, 1],
    [0.75, 1, 1, 0]
  );
  const scaleCardE = useTransform(
    scrollYProgressProjectsBgSection5,
    [0, 0.25, 0.75, 1],
    [0.75, 1, 1, 0]
  );
  const scaleCardF = useTransform(
    scrollYProgressProjectsBgSection6,
    [0, 0.25, 0.75, 1],
    [0.75, 1, 1, 0]
  );

  const backgroundCardSections = [
    {
      id: 1,
      color: 'var(--mantine-color-pink-9)',
      ref: bgSection1Ref,
    },
    {
      id: 2,
      color: 'var(--mantine-color-pink-8)',
      ref: bgSection2Ref,
    },
    {
      id: 3,
      color: 'var(--mantine-color-pink-7)',
      ref: bgSection3Ref,
    },
    {
      id: 4,
      color: 'var(--mantine-color-pink-6)',
      ref: bgSection4Ref,
    },
    {
      id: 5,
      color: 'var(--mantine-color-pink-5)',
      ref: bgSection5Ref,
    },
    {
      id: 6,
      color: 'var(--mantine-color-pink-4)',
      ref: bgSection6Ref,
    },
  ];
  const cardsData = [
    {
      id: 1,
      url: '/img/cards/itzam-na.jpg',
      title: 'Itzam Na',
      description: 'Card 1 Description',
      typeOfProject: '3d',
      scrollEffect: scaleCardA,
    },
    {
      id: 2,
      url: '/img/cards/intergalactic.jpg',
      title: 'Intergalactic',
      description: 'Card 2 Description',
      typeOfProject: '3d',
      scrollEffect: scaleCardB,
    },
    {
      id: 3,
      url: '/img/cards/santo.jpg',
      title: 'Santo',
      description: 'Card 3 Description',
      typeOfProject: '3d',
      scrollEffect: scaleCardC,
    },
    {
      id: 4,
      url: '/img/cards/riveras.jpg',
      title: 'Riveras',
      description: 'Card 4 Description',
      typeOfProject: '3d',
      scrollEffect: scaleCardD,
    },
    {
      id: 5,
      url: '/img/cards/dr-chunga.jpg',
      title: 'Dr. Chunga',
      description: 'Card 5 Description',
      typeOfProject: '3d',
      scrollEffect: scaleCardE,
    },
    {
      id: 6,
      url: '/img/cards/cri-cri.jpg',
      title: 'Cri Cri',
      description: 'Card 6 Description',
      typeOfProject: '3d',
      scrollEffect: scaleCardF,
    },
  ];
  return (
    <>
      <div className={classes.grid_gallery_container} ref={galleryRef}>
        <div className={classes.sticky}>
          <motion.div className={classes.gallery} style={{ x: x }}>
            {cardsData.map((card) => (
              <Card card={card} key={card.id} scrollEffect={card.scrollEffect} />
            ))}
          </motion.div>
        </div>
        <div className={classes.grid_bg_sections}>
          {backgroundCardSections.map((section) => (
            <motion.div
              ref={section.ref}
              className={classes.bg_section}
              key={section.id}
              // style={{ backgroundColor: section.color }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GridGallery;
