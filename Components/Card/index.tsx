import * as React from "react";
import styles from "../../styles/Home.module.css";
import { useBasket } from "../../Contexts/basket-context";
import {itemType} from "../../types";

interface OwnProps {
  hit: itemType;
  inBasket: boolean;
}

type Props = OwnProps;

const Card: React.FunctionComponent<Props> = (props) => {
  const { addItem,removeItem } = useBasket();
  return (
    <div className={styles.card}>
      <img src={props.hit.image} alt={props.hit.name} />
      <h3>{props.hit.name}</h3>
      <p>{props.hit.salePrice}</p>

      <button
        onClick={() => {
          if(props.inBasket){
              removeItem(props.hit)
          }else {
              addItem(props.hit)
          }
        }}
      >
          {props.inBasket ? 'Supprimer du panier' : 'Ajouter au panier '}
      </button>
    </div>
  );
};

export default Card;
