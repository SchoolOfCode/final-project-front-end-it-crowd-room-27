import React, { useEffect, useRef, useState } from "react";
import { API_URL } from "../../config";
import PickUpModal from "../PickUpModal";
import Link from "next/link";
import EditCardModal from "../EditCardModal";
import styles from "../../styles/card.module.css";
import Router from "next/router";

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
	users,
	updatedListings,
	showToast,
	isShowAlert,
	setIsShowAlert,
}) {
	const [modalShow, setModalShow] = useState(false);
	const [editItemModalShow, setEditItemModalShow] = useState(false);

	//take value of is_reserved from database, and store it in state to be used locally
	const [isReserved, setIsReserved] = useState(is_reserved);

	const handleReservation = async (item_id) => {
		//when this function fires onClick, it will toggle the opposite boolean
		const body = {
			is_reserved: !isReserved,
		};
		console.log("within fn ", body);
		await fetch(`${API_URL}/api/items/${item_id}`, {
			method: "PATCH",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" },
		});
		Router.reload(window.location);
	};

	// --=-==-=-=-=-=-==-=-=-=-=-=-=-=-=-=ARSHI'S VERSION=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	// const [isReserved, setIsReserved] = useState(is_reserved);

	// console.log("outside fn ", isReserved);

	// const handleReservation = async (item_id) => {
	// 	const newState = !isReserved;
	// 	setIsReserved(newState);
	// 	const body = {
	// 		is_reserved: newState,
	// 	};

	// 	console.log("within fn ", body);
	// 	await fetch(`${API_URL}/api/items/${item_id}`, {
	// 		method: "PATCH",
	// 		body: JSON.stringify(body),
	// 		headers: { "Content-Type": "application/json" },
	// 	});
	// 	// Router.reload(window.location);
	// };

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

   let short_name = '';
   if(full_name.length >= 14) {
    let num = full_name.indexOf(" ");
    short_name = full_name.slice(0, num);
    
  } 

	return (
		<div
			className={`${styles.cardContainer} 
		${is_reserved === true ? styles.reserved : ""}`}
		>
			<div className={styles.cardLeft}>
				<div className={styles.imgContainer}>
					<img src={item_image}></img>
				</div>
			</div>
			<div className={styles.cardRight}>
				<div className={styles.cardRightTop}>
					<div className={styles.username}>
						{/* link which takes us to the user profile page w/ dynamic routing */}

						{currentUser && is_reserved === false ? (
							<Link href={`/users/${user_id}`} key={user_id}>
								<h5 className={styles.profileLink}>{short_name ? short_name : full_name}</h5>
							</Link>
						) : (
							<h5
								className={`${styles.profileLink} 
		${is_reserved === true ? styles.reserved : ""}`}
							>
								{short_name ? short_name : full_name}
							</h5>
						)}

						<div>
							<div
								className={`${styles.available} ${
									isReserved ? styles.reserved : ""
								}`}
							></div>
						</div>

						{/* stars to show how a user rating could look if we ever develop this feature */}
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
					<h6>Local Area:</h6>
					<p>{address}</p>
				</div>
				<div className={styles.cardRightBottom}>
					<div className={styles.cardRightBottomLeft}>
						{user && currentUser?.email === user.email ? (
							<div>
								<button
									variant="primary"
									onClick={() => setEditItemModalShow(true)}
									className={`${styles.editBtn} ${is_reserved === true ? styles.reservedEditBtn : ""}`}
								>
									Edit
								</button>
								<EditCardModal
									item_id={item_id}
									id={user_id}
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
									// show={modalShow}
									users={users}
									updatedListings={updatedListings}
									show={editItemModalShow}
									onHide={() => setEditItemModalShow(false)}
									showToast={showToast}
									isShowAlert={isShowAlert}
									setIsShowAlert={setIsShowAlert}
								/>
							</div>
						) : is_reserved === false && currentUser ? (
							<button
								variant="primary"
								onClick={() => setModalShow(true)}
								className={styles.detailsBtn}
							>
								Details
							</button>
						) : null}{" "}
						{user && currentUser?.email === user.email ? (
							<button
								variant="primary"
								onClick={() => {
									handleReservation(item_id);
								}}
								className={styles.btn}
							>
								{isReserved ? `Release` : `Reserved` }
							</button>
						) : null}
					</div>
					<div className={styles.cardRightBottomRight}>
						{/* 1.only display the delete button if the user owns the card*/}
						{/* 2.'user' is here because we only pass the user prop to the card on the profile page - user can't delete from any other page */}
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
						users={users}
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;
