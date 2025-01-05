import styles from "./Card.module.css";

export interface CardProps {
  position: number;
  title: string;
  type: string;
  onClick: () => void;
}

const typesObj: any = {
  "bill-of-lading": (
    <span className="material-symbols-outlined">checkbook</span>
  ),
  "bank-draft": (
    <span className="material-symbols-outlined">account_balance</span>
  ),
  invoice: <span className="material-symbols-outlined">savings</span>,
};

export const Card = ({ position, title, type, onClick }: CardProps) => {
  return (
    <div className={styles.card} onClick={() => onClick}>
      {typesObj[type]}
      {/* <span>{position}</span> */}
      <span>{title}</span>
    </div>
  );
};
