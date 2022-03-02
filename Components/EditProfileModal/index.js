import React from "react";
import FormInputs from "../FormInputs";
import Modal from "react-bootstrap/Modal";

function EditProfileModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Modal heading
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h1>PROVIDE REGISTRATION INFORMATION</h1>
				<FormInputs />
			</Modal.Body>
			<Modal.Footer>
				<button onClick={props.onHide}>Close</button>
			</Modal.Footer>
		</Modal>
	);
}

export default EditProfileModal;
