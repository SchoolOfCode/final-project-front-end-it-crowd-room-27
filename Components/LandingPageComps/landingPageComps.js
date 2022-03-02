import React from "react";
import styles from "../../styles/home.module.css";
import ReadMoreButton from "../Buttons/ReadMoreButton/Index";

export function Top() {
  return (
    <div className={styles.cover}>
      <div className={styles.top}>
        <div className={styles.inner_top}>
          <h1 className={styles.title}>
            iGive <br /> with pleasure!
          </h1>
        </div>
      </div>
    </div>
  );
}

export function Middle() {
  return (
    <div className={styles.midle}>
      <h3 className={styles.arttitle}>Our Story!</h3>
      <p className={styles.article}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
        possimus quidem fugiat illum sint! Inventore cumque quod sequi, quas
        provident, voluptas aspernatur deleniti officiis deserunt porro dolores
        excepturi soluta voluptatibus, odit esse aliquam et harum nihil dolor
        maxime dolorum praesentium. Nobis quis nam ea nihil facilis atque
        deserunt libero magnam totam asperiores corporis tempore at quidem,
        provident, beatae veniam veritatis. Obcaecati cupiditate nam
        repellendus, autem provident, harum eligendi expedita ipsam nulla
        dolores aliquam mollitia tenetur ex ut? Quisquam, facere ducimus rem
        aliquam voluptas quas necessitatibus a. Repellendus architecto quasi
        omnis possimus eos consequuntur, vitae sapiente? Nihil provident dolorem
        neque reiciendis?
      </p>
      <ReadMoreButton />
    </div>
  );
}

export function Bottom() {
  return (
    <div className={styles.bottom}>
      <h3 className={styles.useDescription}>How to use iGive</h3>
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

export function VeryBottom() {
  return (
    <div className={styles.very_bottom}>
      <h3 className={styles.cards_title}>
        Hear What Our<br></br> Customers are Saying
      </h3>

      <div className={styles.cards_cover}>
        <div className={styles.card}>
          <p className={styles.comment_author}>
            "I used to throw away veggies that were about to expire. Now I save
            money and reduce food waste"
          </p>
          <span className={styles.raiting_author}>5 stars</span>
          <p className={styles.feedback_author}>Mike From Derby</p>
        </div>

        <div className={styles.card}>
          <p className={styles.comment_author}>
            "I used to throw away veggies that were about to expire. Now I save
            money and reduce food waste"
          </p>
          <span className={styles.raiting_author}>5 stars</span>
          <p className={styles.feedback_author}>Mike From Derby</p>
        </div>

        <div className={styles.card}>
          <p className={styles.comment_author}>
            "I used to throw away veggies that were about to expire. Now I save
            money and reduce food waste"
          </p>
          <span className={styles.raiting_author}>5 stars</span>
          <p className={styles.feedback_author}>Mike From Derby</p>
        </div>
      </div>

      <h3 className={styles.cards_title}>Featured In</h3>
      <div className={styles.featured_media}>
        <img
          className={styles.featured_logo}
          src="https://www.chalegrove.co.uk/wp-content/uploads/2018/12/sunday-times.jpg"
        />
        <img
          className={styles.featured_logo}
          src="https://www.logolynx.com/images/logolynx/2d/2d71f43a8bca9f5c33ad507415e303af.jpeg"
        />
        <img
          className={styles.featured_logo}
          src="https://media.info/i/lf/0/1442315133/1571.png"
        />
        <img
          className={styles.featured_logo}
          src="https://www.tabletalkmedia.co.uk/wp-content/uploads/2015/04/hello.png"
        />
      </div>
      {/* </div> */}
    </div>
  );
}
