import classes from './Card.module.css';

function Card() {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.card_image} />

        <div className={classes.card_info} />
      </div>
    </>
  );
}

export default Card;
