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

function Card({ card }: CardProps) {
  return (
    <>
      <div className={classes.card} key={card.id}>
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
      </div>
    </>
  );
}

export default Card;
