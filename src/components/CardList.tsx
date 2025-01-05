import { useEffect, useState } from "react";
import { Card, CardProps } from "./Card";
import styles from "./CardList.module.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/api/bankcards")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="drag-wrapper">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.root}
          >
            {cards.map((card: CardProps, index) => (
              <Draggable
                draggableId={card.title}
                key={card.title}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={styles.flexItem}
                  >
                    <Card {...card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CardList;
