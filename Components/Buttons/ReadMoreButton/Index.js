import React from "react";
import Link from "next/link";
import styles from '../../../styles/button.module.css';

function ReadMoreButton() {
  return (
    <div>
      <Link className={styles.read_more_button} href="/about">Read More</Link>
      <a href="/about">Read More</a>
      </div>
  );
}

export default ReadMoreButton;
