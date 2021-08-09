import styles from "./Card.module.scss";
import React from "react";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(true);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
    
    props.onPlus(props);
  };

const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    
    props.onFavorite();
  };
  return (
    <div className={styles.card}>
    <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'} alt="Unliked" />
            </div>
      <img src={props.imageUrl} width="133" height="112" alt="ss" />
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Цена:</span>
          <b>{props.price} руб</b>
        </div>

        <img
          className={styles.plus}
          src={isAdded? "img/btn-checked.svg":"img/btn-plus.svg"}
          alt="plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}
export default Card;
