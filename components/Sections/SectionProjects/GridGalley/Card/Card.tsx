import { motion } from 'motion/react';
import classes from './Card.module.css';

interface CardProps {
  card: {
    id: number;
    url: string;
    title: string;
    description: string;
    typeOfProject: string;
  };
  // scaleCard: number;
}

function Card({ card, scrollEffect }: any) {
  return (
    <>
      <motion.div className={classes.card} key={card.id} style={{ scale: scrollEffect }}>
        <div
          className={classes.card_image}
          style={{
            backgroundImage: `url(${card.url})`,
          }}
        />

        {/* <div className={classes.card_info}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <p>{card.typeOfProject}</p>
        </div> */}
      </motion.div>
    </>
  );
}

export default Card;
