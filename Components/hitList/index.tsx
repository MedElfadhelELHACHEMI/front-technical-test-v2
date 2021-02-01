import * as React from "react";
import Card from "../Card";
import styles from "../../styles/Home.module.css";
import { useBasket } from "../../Contexts/basket-context";
import { itemType } from "../../types";

interface OwnProps {
  hits?: itemType[];
}

type Props = OwnProps;

const HitList: React.FunctionComponent<Props> = (props) => {
  const { basket } = useBasket();
  const isInBasket = (hit) => {
    return basket.some((elem) => elem.objectID === hit.objectID);
  };
  return (
    <div className={styles.grid}>
      {props.hits?.map((hit) => (
        <Card key={hit.objectID} hit={hit} inBasket={isInBasket(hit)} />
      ))}
    </div>
  );
};

export default HitList;
