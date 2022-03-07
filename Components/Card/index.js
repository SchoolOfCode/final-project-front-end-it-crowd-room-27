import React from "react";
import styles from "../../styles/card.module.css";
import PickUpModal from "../PickUpModal";
import Link from "next/link";

function Card({
	user,
	item_id,
	user_id,
	full_name,
	email,
	address,
	is_active,
	category,
	item_name,
	item_description,
	use_by_date,
	date_added,
	quantity,
	item_image,
	is_reserved,
	availability,
	time_slot,
	cloudinary_id,
	avatar,
	user_bio,
	currentUser,
	handleDelete,
}) {
	console.log(user_id);
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardLeft}>
				<div className={styles.imgContainer}>
					<img src={item_image}></img>
				</div>
			</div>
			<div className={styles.cardRight}>
				<div className={styles.cardRightTop}>
					<div className={styles.username}>
						<Link href={`/users/${user_id}`} key={user_id}>
							<h5 className={styles.profileLink}>{full_name}</h5>
						</Link>
						<div>
							<div
								className={`${styles.offline} ${
									is_active ? styles.online : ""
								}`}
							></div>
						</div>
						<div className={styles.stars}>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span className={`fa fa-star ${styles.checked}`}></span>
							<span className="fa fa-star"></span>
						</div>
					</div>
					<div className={styles.userImgContainer}>
						<img src={avatar}></img>
					</div>
					<h5 className={styles.itemName}>{item_name}</h5>
				</div>

				<div className={styles.cardRightMiddle}>
					<p className={styles.descriptionText}>{item_description}</p>
				</div>
				<div className={styles.location}>
					<h6>Location:</h6>
					<p>{address}</p>
				</div>
				<div className={styles.cardRightBottom}>
					<div className={styles.cardRightBottomLeft}>
						{user && currentUser?.email === user.email ? (
							<button
								variant="primary"
								onClick={() => handleDelete(item_id)}
								className={styles.deleteBtn}
							>
								Delete
							</button>
						) : null}
					</div>
					<div className={styles.cardRightBottomRight}>
						<button
							variant="primary"
							onClick={() => setModalShow(true)}
							className={styles.btn}
						>
							Details
						</button>
					</div>

					<PickUpModal
						item_id={item_id}
						user_id={user_id}
						full_name={full_name}
						email={email}
						address={address}
						is_active={is_active}
						category={category}
						item_name={item_name}
						item_description={item_description}
						use_by_date={use_by_date}
						date_added={date_added}
						quantity={quantity}
						item_image={item_image}
						is_reserved={is_reserved}
						availability={availability}
						time_slot={time_slot}
						cloudinary_id={cloudinary_id}
						avatar={avatar}
						user_bio={user_bio}
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;
