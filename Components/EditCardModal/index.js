import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/giveAwayModal.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { API_URL } from "../../config.js";
import Router from "next/router";

function EditCardModal(props) {
	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>Loading ...</div>;
	if (error) return <div>{error.message}</div>;

	const uId = props.id;
	const itId = props.item_id;
	const reserved = props.is_reserved;
  const originDate = props.date_added;
	// const listings = props.updatedListings[0];
	console.log(uId);
	console.log(itId);
	// console.log(reserved);
	// console.log(listings);
	//currentUser matches the authenticated user with their info in our db
	// const currentUser = users?.find((currUser) => currUser.email === user?.email);

	//capture form data
    
	const [previewSource, setPreviewSource] = useState(props.item_image);
	const [itemName, setItemName] = useState(props.item_name);
	const [itemDesc, setItemDesc] = useState(props.item_description);
	const [quantity, setQuantity] = useState(props.quantity);
	const [category, setCategory] = useState(props.category);
	const [useByDate, setUseByDate] = useState(props.use_by_date);
	const [timeSlot, setTimeSlot] = useState(props.time_slot);

	//an object which will represent the form data to send to the server (req.body)
	const body = {
		user_id: uId,
		category: category,
		item_name: itemName,
		item_description: itemDesc,
		use_by_date: useByDate,
		date_added: originDate,
		quantity: quantity,
		image: previewSource,
		is_reserved: reserved,
		availability: true,
		time_slot: timeSlot,
	};

	//when the user selects an image from their desktop, preview it in the browser
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
	};

	//convert to base64encoded image using new FileReader API
	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	//stringify the body object defined above and send as req.body to server
	const handleSubmit = async () => {
		try {
			await fetch(`${API_URL}/api/items/${itId}`, {
				method: "PUT",
				body: JSON.stringify(body),
				headers: { "Content-Type": "application/json" },
			});
		} catch (error) {
			console.log("error", error);
			error ? showToast(failed_to_save) : null;
		}

		Router.reload(window.location.pathname);
	};

	// BUTTONS HANDLERS

	function handleItemName(event) {
		const name = event.target.value;
		setItemName(name);
	}
	function handleItemDesc(event) {
		const description = event.target.value;
		setItemDesc(description);
	}
	function handleQuantity(event) {
		const quantity = event.target.value;
		setQuantity(quantity);
	}
	function handleCategory(event) {
		const itemCategory = event.target.value;
		setCategory(itemCategory);
	}
	function handleUseByDate(event) {
		const byDate = event.target.value;
		setUseByDate(byDate);
	}
	function handleTimeSlot(event) {
		const slot = event.target.value;
		setTimeSlot(slot);
	}

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton className={styles.header}>
				<h1>Give Away an Item</h1>
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<div className={styles.bodyLeft}>
					<div className={styles.imgContainer}>
						{/* check that the user has selected a file and preview it to the left of the form */}
						{previewSource ? <img src={previewSource}></img> : null}
					</div>
				</div>
				<div className={styles.bodyRight}>
					<div className={styles.container}>
						<h1>Edit the details below</h1>
						<div className={styles.form}>
							<form>
								<h6>Item</h6>
								<textarea
									className={styles.textField}
									type="text"
									value={itemName}
									onChange={(e) => handleItemName(e)}
									required
									maxlength="17"
								></textarea>
								<h6>Category</h6>
								<select
									value={category}
									onChange={(e) => handleCategory(e)}
									required
									className={styles.category}
								>
									<option value="Fruit">Fruit</option>
									<option value="Vegetables">Vegetables</option>
									<option value="Dairy">Dairy</option>
									<option value="Meat, Fish, Eggs">Meat, Fish, Eggs</option>
									<option value="Bakery">Bakery</option>
									<option value="Cakes">Cakes</option>
									<option value="Pantry items">Pantry items</option>
									<option value="Organic waste">Organic waste</option>
									<option value="Other">Other</option>
								</select>

								<h6>Brief Description</h6>
								<textarea
									className={styles.textField}
									type="text"
									value={itemDesc}
									onChange={(e) => handleItemDesc(e)}
									required
								></textarea>
								<h6>Best before date</h6>
								<textarea
									className={styles.textField}
									type="text"
									value={useByDate}
									onChange={(e) => handleUseByDate(e)}
									required
								></textarea>
								<h6>Quantity</h6>
								<textarea
									className={styles.textField}
									type="text"
									value={quantity}
									onChange={(e) => handleQuantity(e)}
									required
								></textarea>
								<h6>My Availability</h6>
								<textarea
									className={styles.textField}
									type="text"
									value={timeSlot}
									onChange={(e) => handleTimeSlot(e)}
									required
								></textarea>
								<h6>Choose an image</h6>
								<input type="file" onChange={handleFileInputChange}></input>
							</form>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer className={styles.footer}>
				<button onClick={(props.onHide, handleSubmit)} className={styles.btn}>
					Save
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default EditCardModal;
