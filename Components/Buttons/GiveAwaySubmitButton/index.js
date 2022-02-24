import React from "react";
import styles from "../../../styles/button.module.css";

function GiveAwaySubmitButton({ text, handleSubmit }) {
   return (
      <div>
         <button type="submit" onClick={handleSubmit} className={styles.btn}>
            {text}
         </button>
      </div>
   );
}

export default GiveAwaySubmitButton;
