import React from "react";
import styles from "../../styles/card.module.css";
import PickUpModal from "../PickUpModal";
import Link from "next/link";

function Card({
  item_id,
  user_id,
  first_name,
  last_name,
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
}) {
  const boldText = {
    fontWeight: "900",
  };

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardLeft}>
        <div className={styles.imgContainer}>
          <img src={item_image} height="100%" width="100%"></img>
        </div>
      </div>
      <div className={styles.cardRight}>
        <div className={styles.cardRightTop}>
          <div className={styles.username} style={boldText}>
            <Link href={`/profiles/${user_id}`} key={user_id}>
              <a>
                <h5>
                  {first_name}
                  {` `}
                  {last_name}
                </h5>
              </a>
            </Link>
            <div className={styles.stars}>
              <span className={`fa fa-star ${styles.checked}`}></span>
              <span className={`fa fa-star ${styles.checked}`}></span>
              <span className={`fa fa-star ${styles.checked}`}></span>
              <span className={`fa fa-star ${styles.checked}`}></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <div className={styles.userImg}>
            <img src={avatar}></img>
          </div>
          <h5 className={styles.itemName}>{item_name}</h5>
          <h6 className={styles.expiry}>Expires: {use_by_date}</h6>
        </div>

        <div className={styles.cardRightMiddle}>
          {/* <h5>{category}</h5> */}
          <p className={styles.descriptionText}>{item_description}</p>
        </div>
        <div className={styles.cardRightBottom}>
          <h5>Location: </h5>
          <p>{address}</p>

          <button
            variant="primary"
            onClick={() => setModalShow(true)}
            className={styles.btn}
          >
            Details
          </button>

          <PickUpModal
            item_id={item_id}
            user_id={user_id}
            first_name={first_name}
            last_name={last_name}
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
