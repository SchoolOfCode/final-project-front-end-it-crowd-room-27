import React, { useState } from "react";
import styles from "../../styles/card.module.css";
import PickUpModal from "../PickUpModal";
import Link from "next/link";
import EditCardModal from "../EditCardModal";

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
}) {
  console.log(user_id);
  const [modalShow, setModalShow] = useState(false);
  const [editItemModalShow, setEditItemModalShow] = useState(false);
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
            {/* link which takes us to the user profile page w/ dynamic routing */}

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
          <h6>Location:</h6>
          <p>{address}</p>
        </div>
        <div className={styles.cardRightBottom}>
          <div className={styles.cardRightBottomLeft}>
            {user && currentUser?.email === user.email ? (
              <>
                <button
                  variant="primary"
                  onClick={() => setEditItemModalShow(true)}
                  className={styles.editBtn}
                >
                  Edit
                </button>
                <EditCardModal
                  item_id={item_id}
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
                  id={user_id}
                  updatedListings={updatedListings}
                  show={editItemModalShow}
                  onHide={() => setEditItemModalShow(false)}
                />
              </>
            ) : (
              <button
                variant="primary"
                onClick={() => setModalShow(true)}
                className={styles.btn}
              >
                Details
              </button>
            )}
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
