import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/deleteModal.module.css";
import { API_URL } from "../../config.js";
import Router from "next/router";

const DeleteModal = (props) => {
	const userId = props.id;

	const [confirmDeleteProfile, setConfirmDeleteProfile] = useState("");
	const [logOff, setLogOff] = useState("");

	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>Loading ...</div>;
	if (error) return <div>{error.message}</div>;

	// =-==-=-=-=-=-=- DELETE EXISTITNG USER PROFILE FROM DATABASE =-==-=-=-=--=-=-

	const confirmDelete = (e) => {
		const email = e.target.value;
		{
			user?.email === email ? setConfirmDeleteProfile(email) : null;
		}
	};

	const handleDeleteProfile = async () => {
		// showToast(delete_profile_warning);

		{
			confirmDeleteProfile
				? await fetch(`${API_URL}/api/users/${userId}`, {
						method: "DELETE",
				  })
				: //   && setLogOff("/api/auth/logout")
				  null;
		}

		//
		// setUpdatedListings(
		//   updatedListings.filter((listing) => listing.item_id !== id)
		// );
		Router.reload(window.location);
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton className={styles.header}>
				<h1 className={styles.delete_title}>Delete your current profile</h1>
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<div className={styles.bodyRight}>
					<div className={styles.container}>
						{/* <h1>Delete your current profile</h1> */}
						<div className={styles.form}>
							<form>
								<p className={styles.condition}>
									To delete your current profile type your email{" "}
									<strong>{user.email}</strong> below:
								</p>
								<input
									className={styles.textField}
									placeholder="Your email here ..."
									type="text"
									onChange={(e) => confirmDelete(e)}
									required
								/>
							</form>
						</div>
					</div>
				</div>
			</Modal.Body>

			<Modal.Footer className={styles.footer}>
				<button
					onClick={(props.onHide, handleDeleteProfile)}
					className={styles.btn}
				>
					{/* <a href={logOff}></a> */}Confirm
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteModal;
