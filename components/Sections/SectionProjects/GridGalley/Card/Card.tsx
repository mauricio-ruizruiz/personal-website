import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  valueHoverCard: number;
  toggleHoverCard: (id?: number) => void;
  index: number;
}

function Card({ card, valueHoverCard, toggleHoverCard, index }: CardProps) {
  const variants = {
    inactive: { scale: 1 },
    hover: { scale: 1.5 },
    nexttohover: { scale: 1.25 },
  };

  useEffect(() => {
    // console.log('number card: ' + card.id);
  }, [valueHoverCard]);

  const handleHover = (index: number) => {
    console.log('Hovered card index:', index);
    toggleHoverCard(index);
  };

  return (
    <motion.div
      className={classes.card}
      key={card.id}
      initial={false}
      variants={variants}
      animate={valueHoverCard === card.id ? { scale: 1.2 } : { scale: 1 }}
      // whileHover="hover"
      onHoverStart={() => handleHover(index)}
      onHoverEnd={() => {
        toggleHoverCard(undefined);
        console.log(valueHoverCard);
      }}
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
  );
}

export default Card;
