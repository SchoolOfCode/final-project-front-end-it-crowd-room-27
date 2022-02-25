import React from "react";
import styles from "../../styles/home.module.css";
import ReadMoreButton from "../Buttons/ReadMoreButton/Index";

export function Top() {
  return (
    <div className={styles.cover}>
    	<div className={styles.top}>
			<div className={styles.inner_top}>
				  <h1 className={styles.title}>iGive <br/> with pleasure!</h1>
      		</div>
    	</div>
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

export function VeryBottom() {
	return (
	  <div className={styles.very_bottom}>
		
		<h3 className={styles.cards_title}>Hear What Our Customers are Saing</h3>
		
		<div className={styles.cards_cover}>
			
			<div className={styles.card}>
				<p className={styles.comment_author}>"I used to throw away veggies that were about to expire. Now I save money  and reduce food waste"</p>
				<span className={styles.raiting_author}>5 stars</span>
				<p className={styles.feedback_author}>Mike From Derby</p>
			</div>
			
			<div className={styles.card}>
				<p className={styles.comment_author}>"I used to throw away veggies that were about to expire. Now I save money  and reduce food waste"</p>
				<span className={styles.raiting_author}>5 stars</span>
				<p className={styles.feedback_author}>Mike From Derby</p>
			</div>
			
			<div className={styles.card}>
				<p className={styles.comment_author}>"I used to throw away veggies that were about to expire. Now I save money  and reduce food waste"</p>
				<span className={styles.raiting_author}>5 stars</span>
				<p className={styles.feedback_author}>Mike From Derby</p>
			</div>
		</div>

		<h3 className={styles.cards_title}>Featured In</h3>
		<div className={styles.featured_media}>
			<img className={styles.featured_logo} src="https://stefanritson.com/wp-content/uploads/2017/12/StefanRitson_TheSundayTimes-01-min.png"/>
			<img className={styles.featured_logo} src="https://www.logolynx.com/images/logolynx/2d/2d71f43a8bca9f5c33ad507415e303af.jpeg"/>
			<img className={styles.featured_logo} src="https://media.info/i/lf/0/1442315133/1571.png"/>
			<img className={styles.featured_logo} src="https://www.tabletalkmedia.co.uk/wp-content/uploads/2015/04/hello.png"/>
		</div>
		{/* </div> */}

		
	</div>
	);
  }
