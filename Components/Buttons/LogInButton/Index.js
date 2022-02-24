import React from "react";
import styles from '../../../styles/button.module.css';

function LogInButton() {
  return (
    <p className={styles.log_button}>
      <a href="/api/auth/login" style={{ color: "black" }}>
        LogIn
      </a>
    </p>
  );
}

export default LogInButton;
