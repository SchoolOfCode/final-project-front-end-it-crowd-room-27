import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "../../styles/pickUpModal.module.css";

function PickUpModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton className={styles.header}>
				<Modal.Title id="contained-modal-title-vcenter">
					Freshly made bread
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<h4>Centered Modal</h4>
				<p>{props.text}</p>
			</Modal.Body>
			<Modal.Footer className={styles.footer}>
				<Button onClick={props.onHide} className={styles.btn}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default PickUpModal;
