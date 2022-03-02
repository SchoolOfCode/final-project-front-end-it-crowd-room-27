import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../Button";
import styles from "../../styles/giveAwayModal.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import GiveItemSubmitButton from "../Buttons/GiveItemSubmitButton/index";

function GiveAwayModal(props) {
	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>Loading ...</div>;
	if (error) return <div>{error.message}</div>;

	//capture form data
	const [previewSource, setPreviewSource] = useState("");
	const [itemName, setItemName] = useState("");
	const [itemDesc, setItemDesc] = useState("");
	const [quantity, setQuantity] = useState("");
	const [category, setCategory] = useState("");
	const [useByDate, setUseByDate] = useState("");
	const [availability, setAvailability] = useState(true);

	const [dateAdded, setDateAdded] = useState(Date.now());
	const [isReserved, setIsReserved] = useState(false);
	const [timeSlot, setTimeSlot] = useState("");

	//an object which will represent the form data to send to the server (req.body)

	const users = props.users;

	console.log(users);
	const currentUser = users.find((currUser) => currUser.email === user.email);
	console.log(currentUser.id);

	const body = {
		user_id: currentUser.id,
		category: category,
		item_name: itemName,
		item_description: itemDesc,
		use_by_date: useByDate,
		date_added: Date.now(),
		quantity: quantity,
		is_reserved: true,
		availability: false,
		time_slot: timeSlot,
		image: previewSource,
	};

	// // user_id,
	// 	category,
	// 	item_name,
	// 	item_description,
	// 	use_by_date,
	// 	date_added,
	// 	quantity,
	// 	is_reserved,
	// 	availability,
	// 	time_slot,
	// 	image,

	console.log(body);

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
		await fetch(`https://it-crowd-project.herokuapp.com/api/items`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" },
		});
	};

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
			<Modal.Body className={styles.body}>
				<div className={styles.bodyLeft}>
					{previewSource && (
						<img src={previewSource} style={{ height: "500px" }}></img>
					)}
				</div>
				<div className={styles.bodyRight}>
					<div className={styles.container}>
						<h1>Fill in the details below...</h1>
						<div className={styles.form}>
							<form>
								<h6>Item</h6>
								<textarea
									className={styles.textField}
									placeholder="What are you donating?"
									type="text"
									value={itemName}
									onChange={(e) => setItemName(e.target.value)}
									required
								></textarea>
								<h6>Category</h6>
								<textarea
									className={styles.textField}
									placeholder="Category?..."
									type="text"
									value={category}
									onChange={(e) => setCategory(e.target.value)}
									required
								></textarea>
								<h6>Brief Description</h6>
								<textarea
									className={styles.textField}
									placeholder="Briefly describe your donation.."
									type="text"
									value={itemDesc}
									onChange={(e) => setItemDesc(e.target.value)}
									required
								></textarea>
								<h6>Best before date</h6>
								<textarea
									className={styles.textField}
									placeholder="Best before date..."
									type="text"
									value={useByDate}
									onChange={(e) => setUseByDate(e.target.value)}
									required
								></textarea>
								<h6>Quantity</h6>
								<textarea
									className={styles.textField}
									placeholder="How much/many?"
									type="text"
									value={quantity}
									onChange={(e) => setQuantity(e.target.value)}
									required
								></textarea>
								<h6>My Availability</h6>
								<textarea
									className={styles.textField}
									placeholder="Please write times when you're available.."
									type="text"
									value={timeSlot}
									onChange={(e) => setTimeSlot(e.target.value)}
									required
								></textarea>
								<h6>Choose an image</h6>
								<input type="file" onChange={handleFileInputChange}></input>
							</form>

							<Button handleSubmit={handleSubmit} text="Submit" />
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer className={styles.footer}>
				<button onClick={props.onHide} className={styles.btn}>
					Submit
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default GiveAwayModal;
