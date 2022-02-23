import React from "react";
import styles from "../../styles/home.module.css";
import LogInButton from "../Buttons/LogInButton/Index";
import ReadMoreButton from "../Buttons/ReadMoreButton/Index";

import { API_URL } from "../Config";

export function Top() {
  return (
    <div className={styles.top}>
      <p className={styles.logo}>Logo</p>
      <h1 className={styles.title}>Welcome to iGive!</h1>
      <LogInButton />
      {/* <a href="/api/auth/login">LogIn</a> */}
    </div>
  );
}

export function Middle() {
  return (
    <div className={styles.midle}>
      <h4 className={styles.arttitle}>Our Story!</h4>
      <p className={styles.article}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac neque a
        lacus convallis cursus. Aenean aliquam orci sit amet lectus sagittis,
        quis porta enim elementum. Duis a ultrices purus, nec rhoncus purus.
        Curabitur consequat vulputate mi, quis viverra justo auctor quis.
        Curabitur congue eu metus dapibus luctus. Curabitur consequat vulputate
        mi, quis viverra justo auctor quis. Curabitur congue eu metus dapibus
        luctus. Curabitur consequat vulputate mi, quis viverra justo auctor
        quis. Curabitur congue eu metus dapibus luctus. Curabitur consequat
        vulputate mi, quis viverra justo auctor quis. Curabitur congue eu metus
        dapibus luctus.
      </p>
      <ReadMoreButton />
    </div>
  );
}
export function Bottom() {
  return (
    <div className={styles.bottom}>
      <h3 className={styles.useDescription}>How to use iGive:</h3>
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/dnKFSafaJOo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* width="480" height="315" */}
    </div>
  );
}
