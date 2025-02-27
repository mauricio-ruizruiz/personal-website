import { motion } from 'motion/react';
import { useToggle } from '@mantine/hooks';
import classes from './Card.module.css';

interface CardProps {
  card: {
    id: number;
    url: string;
    title: string;
    description: string;
    typeOfProject: string;
  };
}

function Card({
  card,
  scrollEffect,
  hoverCard,
  valueHoverCard,
  toggleHoverCard,
  valueActiveCard,
  toggleActiveCard,
}: any) {
  return (
    <>
      <motion.div
        className={classes.card}
        key={card.id}
        initial={false}
        animate={valueActiveCard == 'Santo' ? { scale: 1.2 } : { scale: 1 }}
        // style={{ scale: scrollEffect }}
        // whileHover={hoverCard}
      >
        <div
          className={classes.card_image}
          style={{
            backgroundImage: `url(${card.url})`,
          }}
        />

        <div className={classes.card_info}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <p>{card.typeOfProject}</p>
        </div>
      </motion.div>
    </>
  );
}

export default Card;
