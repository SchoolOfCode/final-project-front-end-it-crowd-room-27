import React from "react";
import styles from "../../../styles/card.module.css";

function Card() {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardLeft}>
				<div className={styles.imgContainer}>
					<img
						src="https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-5.jpg.webp"
						height="100%"
						width="100%"
					></img>
				</div>
			</div>
			<div className={styles.cardRight}>
				<div className={styles.cardRightTop}>
					<span className={styles.username}>
						<h3>Joe Bloggs</h3>
					</span>
					<h5>
						<p className={styles.date}>Added: 30/12/00</p>
					</h5>
					<h3 className={styles.itemName}>Item:</h3>
					<h4 className={styles.quantity}>Quantity:</h4>
					<h4 className={styles.expiry}>Expiry Date:</h4>
				</div>

				<div className={styles.cardRightMiddle}>
					<h4 className={styles.description}>Description:</h4>
					<p className={styles.descriptionText}>
						Item Description Item Description Item Description Item Description
						Item Description Item Description Item Description Item Description
						Item Description Item Description Item Description Item Description
						Item Description Item Description Item Description Item Description
						Item Description Item Description
					</p>
				</div>
				<div className={styles.cardRightBottom}>
					<h4>Location:</h4>
					<h4>Donor Rating:</h4>
					<button className={styles.btn}>Details</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
