import { useEffect, useState } from "react";
import { Card, CardProps } from "./Card";
import styles from "./CardList.module.css";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/api/bankcards")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className={styles.root}>
      {cards.map((card: CardProps) => (
        <div className={styles.flexItem}>
          <Card {...card}></Card>
        </div>
      ))}
    </div>
  );
};

export default CardList;
