import React from "react";
import styles from "../../styles/home.module.css";
import ReadMoreButton from "../Buttons/ReadMoreButton/Index";
import ScrollArrow from "../ScrollToTop/index";

export function Banner() {
  return (
    <div className={styles.cover}>
      <div className={styles.top}>
        <div className={styles.inner_top}>
          <h1 className={styles.title}>
            Ready to fight<br></br> food waste?
          </h1>
        </div>
      </div>
    </div>
  );
}

export function SectionOne() {
  return (
    <div className={styles.flexboxContainer}>
      <ScrollArrow />
      <div className={`${styles.flexItem1}`}>
        <h3 className={styles.arttitle}>Our Story!</h3>
        <p className={styles.article}>
          Food waste is one of the largest contributors to climate change. At
          the moment many products are made, used and needlessly thrown away,
          contributing to climate change and environmental damage.<br></br>
          <br></br> Many people would prefer a lower carbon and lower cost
          solution for their food which we can enable through our app ‘iGive’.
          <br></br>
          <br></br>iGive is a community based app for people to share their
          unwanted products which could be useful elsewhere. Unwanted food items
          can be shared through the community by using our app.
        </p>
        {/* <ReadMoreButton /> */}
      </div>
    </div>
  );
}

export function SectionTwo() {
  return (
    <div className={styles.flexboxContainer}>
      <div className={styles.flexItem1}>
        <h3 className={styles.useDescription}>How iGive Works!</h3>
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
    </div>
  );
}

export function SectionThree() {
  return (
    <div className={styles.flexboxContainer}>
      <div className={styles.flexItem1}>
        <h3 className={styles.cards_title}>
          Hear What Our<br></br> Customers are Saying
        </h3>

        <div className={styles.cards_cover}>
          <div className={styles.card}>
            <p className={styles.comment_author}>
              "I used to throw away veggies that were about to expire. Now I
              save money and reduce food waste"
            </p>
            <span className={styles.raiting_author}>5 stars</span>
            <p className={styles.feedback_author}>Mike From Derby</p>
          </div>

          <div className={styles.card}>
            <p className={styles.comment_author}>
              "Great app to use I have reduced my food waste by 50% since I
              started using it, recommended 100%"
            </p>
            <span className={styles.raiting_author}>5 stars</span>
            <p className={styles.feedback_author}>Sarah From London</p>
          </div>

          <div className={styles.card}>
            <p className={styles.comment_author}>
              "Excellant idea, I feed bad when I have to throw away food, why
              not give to someone who needs it! "
            </p>
            <span className={styles.raiting_author}>5 stars</span>
            <p className={styles.feedback_author}>Amy From Liverpool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionFour() {
  return (
    <div className={styles.flexboxContainer}>
      <div className={styles.flexItem1}>
        <h3 className={styles.cards_title}>Featured In</h3>
        <div className={styles.flexItem2}>
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
      </div>
    </div>
  );
}
export function Copyright() {
  return (
    <div className={styles.footer}>
      <a href="#" className={styles.btn_up}>
        Pop Up
      </a>
      <p className={styles.cast}>
        created by <strong>IT-Crowd</strong>
        <br /> Simren, Lilly-Ane, Irfan, Thuan, Rory, Dmitriy
      </p>
    </div>
  );
}
