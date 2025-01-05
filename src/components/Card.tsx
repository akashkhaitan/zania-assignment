import styles from "./Card.module.css";

export interface CardProps {
  position: number;
  title: string;
  type: string;
}

export const Card = ({ position, title, type }: CardProps) => {
  return (
    <div className={styles.card}>
      <span>{position}</span>
      <span>{title}</span>
      <span>{type}</span>
    </div>
  );
};
