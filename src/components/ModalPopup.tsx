import { useEffect, useState } from "react";
import styles from "./ModalPopup.module.css";
import loader from "../assets/loader.gif";

export interface ModalProps {
  open: boolean;
  heading: string;
  onClose: () => void;
}

export const ModalPopup = ({ open = false, heading, onClose }: ModalProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgSrc = `https://picsum.photos/200/300?random=${Math.ceil(
    Math.random() * 10
  )}`;

  const onLoaded = () => {
    setLoaded(true);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      onClose();
      setLoaded(false);
    }
  };

  useEffect(() => {
    // Add event listener for keydown events
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {open && (
        <div className={styles.backdrop}>
          <div className={styles.modalContainer}>
            <div className={styles.heading}>{heading}</div>
            <hr></hr>
            <div className={styles.main} onLoad={onLoaded}>
              {loaded ? <img src={imgSrc} /> : <img src={loader} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
