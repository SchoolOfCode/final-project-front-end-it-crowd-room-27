import React from "react";
import styles from "../../../styles/button.module.css";

function AlertButton({ children, handleClick }) {
  return (
    <button className={styles.alert_button} onClick={handleClick}>
      {children}
    </button>
  );
}

export default AlertButton;
