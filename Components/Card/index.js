import React from "react";
import styles from "../../styles/card.module.css";
import PickUpModal from "../PickUpModal";

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
            <h5>
              {first_name}
              {` `}
              {last_name}
            </h5>
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
