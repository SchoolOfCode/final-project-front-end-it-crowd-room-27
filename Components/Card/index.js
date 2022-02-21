import React from "react";
import styles from "../../styles/card.module.css";

function Card() {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardLeft}>
				<div className={styles.imgContainer}>
					<img
						src="https://preview.redd.it/v9n6mfsrn8x21.jpg?auto=webp&s=ce2335485482bf02d7ccec0c9ad0c5f16546dfc2"
						height="100%"
						width="100%"
					></img>
				</div>
			</div>
			<div className={styles.cardRight}>
				<div className={styles.cardRightTop}>
					<div className={styles.username}>
						<h3>Joe Bloggs</h3>
						<div className={styles.stars}>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span class="fa fa-star"></span>
						</div>
					</div>
					<div className={styles.userImg}>
						<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
					</div>

					<h3 className={styles.itemName}>Casserole: 4 meals </h3>
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
					<button className={styles.btn}>Details</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
