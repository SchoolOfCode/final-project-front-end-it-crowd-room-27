import React from "react";
import styles from "../../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export function ScrollArrow({ showScroll }) {
  if (showScroll === true) {
    return (
      <>
        <div className={styles.iconContainer}>
          <a href="#" className={styles.btn_up}>
            <FontAwesomeIcon
              icon={faChevronUp}
              size={"1x"}
              className={styles.faIcon}
            />
          </a>
        </div>
      </>
    );
  } else {
    return null;
  }
  // return (
  //   <>
  //     {showScroll && (
  //       <div className={styles.iconContainer}>
  //         <a href="#" className={styles.btn_up}>
  //           <FontAwesomeIcon icon={faArrowCircleUp} size={"3x"} />
  //         </a>
  //       </div>
  //     )}
  //     ;
  //   </>
  // );
}
