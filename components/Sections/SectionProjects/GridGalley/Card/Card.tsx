import { motion } from 'framer-motion';
import classes from './Card.module.css';

interface CardProps {
  card: {
    id: number;
    url: string;
    title: string;
    description: string;
    typeOfProject: string;
  };
  index: number;
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
  activeCard: number | null;
  setActiveCard: (id: number | null) => void;
}

function Card({ card, index, hoveredCard, setHoveredCard, activeCard, setActiveCard }: CardProps) {
  const handleHoverStart = () => {
    setHoveredCard(index);
  };

  const handleHoverEnd = () => {
    setHoveredCard(null);
  };

  const handleTap = () => {
    setActiveCard(activeCard === index ? null : index);
  };

  const getScale = () => {
    if (hoveredCard === index) {
      return 1.1;
    } else if (hoveredCard === index - 1 || hoveredCard === index + 1) {
      return 1.05;
    } else {
      return 1;
    }
  };
  const getHeight = () => {
    if (hoveredCard === index) {
      return 680;
    } else if (hoveredCard === index - 1 || hoveredCard === index + 1) {
      return 620;
    } else {
      return 600;
    }
  };

  const getWidth = () => {
    return activeCard === index ? '450px' : '150px';
    // return activeCard === index ? '100%' : '50%';
  };
  const getScaleX = () => {
    return activeCard === index ? 1.1 : 1;
    // return activeCard === index ? '100%' : '50%';
  };

  return (
    <motion.div
      layout
      className={classes.card}
      key={card.id}
      initial={false}
      animate={{
        // scale: getScale(),
        // scaleX: getScaleX(),
        width: getWidth(),
        height: getHeight(),
        originY: 'center',
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTap={handleTap}
    >
      <motion.div
        className={classes.card_image}
        animate={
          {
            // scale: getScaleX(),
          }
        }
        transition={{ duration: 0.5 }}
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
