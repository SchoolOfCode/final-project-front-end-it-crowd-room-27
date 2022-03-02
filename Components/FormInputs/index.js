import React, { useState } from "react";
import styles from "./formInputs.module.css";
import { useUser } from "@auth0/nextjs-auth0";

function FormInputs({ setShowEditModal }) {
	const { user, error, isLoading } = useUser();
    
    if(isLoading) return <div>Loading ...</div>;
    if(error) return <div>{error.message}</div>;


	const [previewSource, setPreviewSource] = useState("");
	const [firstName, setFirstName] = useState("");
	const [address, setAddress] = useState("");
	const email = user.email;
	const [lastName, setLastName] = useState("");
	const [userBio, setUserBio] = useState("");
    const [fetchedUsers, setfetchedUsers] = useState([]);

	//an object which will represent the form data to send to the server (req.body)
	const body = {
		first_name: firstName,
		last_name: lastName,
		email: email,
		address: address,
		is_active: true,
		image: previewSource,
		user_bio: userBio,
	};
    // const body = firstName;
    console.log(body);
	//when the user selects an image from their desktop, preview it in the browser
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


	// const handleEditForm = () => {
	// 	if(firstName && lastName && address && userBio) {
	// 		onProvideSubmit(body);
	// 		setShowEditModal(false);
	// 	}
	// }

	const handleFormSubmit = async () => {
		setShowEditModal(false);
		// if(firstName && lastName && address) {
            await fetch(`https://it-crowd-project.herokuapp.com/api/users`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
            });

            setTimeout( async () => {
                const res = await fetch(`https://it-crowd-project.herokuapp.com/api/users`);
                const data = await res.json();
                setfetchedUsers(data.payload);
            }, 1000)


        // }
	};





	//when the user selects an image from their desktop, preview it in the browser
// const handleFileInputChange = (e) => {
// 		const file = e.target.files[0];
// 		previewFile(file);
// 	};

	return (
		<div className={styles.form}>
		<form >
			<p>Email: {email}</p>
			<br />
			<label className={styles.label}> First Name</label>
			<br />
			<input
				className={styles.formInput}
				type="text"
				onChange={(e) => setFirstName(e.target.value)}
				value={firstName}
			/>
			<br />
			<label className={styles.label}><strong> Last Name</strong></label>
			<br />
			<input
				className={styles.formInput}
				type="text"
				onChange={(e) => setLastName(e.target.value)}
				value={lastName}
			/>
			<br />
			<label className={styles.label}><strong> Address</strong></label>
			<br />
			<input
				className={styles.formInput}
				type="text"
				onChange={(e) => setAddress(e.target.value)}
				value={address}
			/>
			<br />
			<label className={styles.label}><strong> Bio</strong></label>
			<br />
			<textarea
				className={`${styles.formTextarea} ${styles.formInput}`}
				type="text"
				onChange={(e) => setUserBio(e.target.value)}
				value={userBio}
				maxLength="75"
			/>
			<br />
			<input type="file" onChange={handleFileInputChange}></input>
		</form>
			{previewSource && (
						<img src={previewSource} style={{ height: "300px" }}></img>
					)}
			<br />
			<button
				className={styles.formSubmitButton}
				onClick={() =>
					handleFormSubmit()
				}
			>
				PROCEED
			</button>
		</div>
	);
}

export default FormInputs;