import React from "react";
import styles from "../../styles/card.module.css";
import PickUpModal from "../PickUpModal";

function Card() {
	const boldText = {
		fontWeight: "900",
	};

	const [modalShow, setModalShow] = React.useState(false);
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
					<div className={styles.username} style={boldText}>
						<h5>Joe Bloggs</h5>
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

					<h5 className={styles.itemName}>Casserole 4 meals </h5>
					<h6 className={styles.expiry}>Expires:</h6>
				</div>

				<div className={styles.cardRightMiddle}>
					<p className={styles.descriptionText}>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
				</div>
				<div className={styles.cardRightBottom}>
					<h5>Location: </h5>
					<p>Birmingham</p>

					<button
						variant="primary"
						onClick={() => setModalShow(true)}
						className={styles.btn}
					>
						Details
					</button>

					<PickUpModal
						text="Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. "
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;
