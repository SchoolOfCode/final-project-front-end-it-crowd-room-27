import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/giveAwayModal.module.css";
import GiveItemSubmitButton from "../Buttons/GiveItemSubmitButton/index";
function GiveAwayModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={styles.header}>
        <h1>Give Away Form</h1>
      </Modal.Header>
      <Modal.Body className={styles.body}></Modal.Body>
      <Modal.Footer className={styles.footer}>
        <GiveItemSubmitButton />
      </Modal.Footer>
    </Modal>
  );
}

export default GiveAwayModal;
