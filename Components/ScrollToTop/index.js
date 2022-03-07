import React from "react";
import styles from "../../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export function ScrollArrow({ style }) {
  return (
    <div className={styles.iconContainer}>
      <a href="#" className={styles.btn_up}>
        <FontAwesomeIcon
          icon={faChevronUp}
          size={"3x"}
          className={styles.faIcon}
          style={style}
        />
      </a>
    </div>
  );
}
