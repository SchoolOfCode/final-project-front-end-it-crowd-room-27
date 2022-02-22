import React from "react";
import Navbar from "../Components/Navbar/index.js";
import styles from "../styles/register.module.css";
import Button from "../Components/Button/index.js";
import Head from "next/head";
import { useState } from "react";

function Register() {
	//capture the value of each form input in an object called data (refer to handleChange function)
	const [data, setData] = useState({
		first_name: "",
		last_name: "",
		address: "",
		email: "",
		image: "",
	});

	//formData basically packages our form into an object of key value pairs,
	//we then set the body of the fetch request to be this formData object.
	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("first_name", data.first_name);
		formData.append("last_name", data.last_name);
		formData.append("address", data.address);
		formData.append("email", data.email);
		formData.append("image", data.image);

		const data = await fetch(`${API_URL}/users`, {
			method: "POST",
			body: formData,
			"Content-type": "application/json",
		});
	};

	//if the user is at the image upload part, make sure to get image from user's local storage
	//at any other part of the form, use the value from what they type in to the input box
	//create shallow copy of data so far
	// [input] is taken from the value of each input field

	const handleChange = (e) => {
		const value = "image" ? e.target.files[0] : e.target.value;
		setData({ ...data, [input]: value });
	};

	return (
		<>
			<Head>
				<title>iGive</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
				</style>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
			</Head>
			<Navbar />
			<div className={styles.container}>
				<h1>Fill in your details below...</h1>
				<div className={styles.form}>
					<form>
						<label className={styles.label}>First Name</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your first name..."
							value={firstName}
						></textarea>
						<label className={styles.label}>Last Name</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your last name..."
							value={lastName}
						></textarea>
						<label className={styles.label}>Address</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your address..."
							value={address}
						></textarea>
						{/* <label className={styles.label}>Contact Number</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your contact number..."
							value={contactNumber}
						></textarea> */}
						<label className={styles.label}>Email</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your email..."
							value={email}
							onChange={(e) => handleChange()}
						></textarea>
						<input
							type="file"
							onChange={(e) => handleChange()}
							value={image}
						></input>
					</form>
					<Button handleSubmit={handleSubmit} text="Submit" />
				</div>
			</div>
		</>
	);
}

export default Register;

//max chars for item description is 180
