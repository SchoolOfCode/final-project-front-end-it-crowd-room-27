import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/pickUpModal.module.css";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { User } from "@auth0/auth0-react";

function PickUpModal(props) {
  const { user, error, isLoading } = useUser();
  const users = props.users;
  // find the user in our database who matches the auth user
  const currentUser = users?.find((currUser) => currUser.email === user.email);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={styles.header}>
        <div className={styles.nameContainer}>
          <div className={styles.nameBox}>
            <h1>{props.full_name}</h1>
            <p>{props.is_active}</p>
            <div className={styles.avatar}>
              <img src={props.avatar}></img>
            </div>
          </div>
          {/* <div className={styles.avatar}>
            <img src={props.avatar}></img>
          </div> */}
        </div>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.bodyLeft}>
          {/* <div className={styles.imgContainer}>
            <img src={props.item_image} className={styles.userImage}></img>
          </div>
        </div> */}

          <div className={styles.imgContainer}>
            <img className={styles.imgItem} src={props.item_image}></img>
          </div>
        </div>

        <div className={styles.bodyRight}>
          <h4>{props.item_name}</h4>
          <p>
            <strong>Type:</strong> {props.category}
          </p>
          <p>
            <strong>Date added:</strong> {props.date_added}
          </p>
          <p>
            <strong>Description:</strong> {props.item_description}
          </p>
          <p>
            <strong>Quantity:</strong> {props.quantity}
          </p>
          <p>
            <strong>Use by:</strong> {props.use_by_date}
          </p>
          <p>
            <strong>Address:</strong> {props.address}
          </p>
          <p>{props.availability}</p>
          <p>
            <strong>Timeslot:</strong> {props.time_slot}
          </p>
          {/* <button onClick={props.onHide} className={styles.btn}>
            Close
          </button> */}
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <div className={styles.formContainer}>
          <form
            target="_blank"
            action={`https://formsubmit.co/${props.email}`}
            method="POST"
          >
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className={styles.formControl}
                name="message"
                rows="10"
                required
              ></textarea>
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/listings"
              ></input>
              <input
                type="hidden"
                name="_autoresponse"
                value="your custom message"
              ></input>
              <input
                hidden
                type="email"
                name="email"
                value={user.email}
                placeholder="Email Address"
              ></input>
              <input
                hidden
                type="name"
                name="itemName"
                value={`${currentUser?.full_name} has requested the following items: ${props.item_name}`}
              ></input>
              <form
                action="https://formsubmit.co/your-random-string"
                method="POST"
              />
            </div>
            {/* <button onClick={handleSubmit} type="submit" className={styles.btn}> */}
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.btn}>
                Request item
              </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </Modal.Footer>
    </Modal>
  );
}

export default PickUpModal;
