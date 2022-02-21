import React from "react";
import Navbar from "../Components/Navbar/index.js";
import styles from "../styles/register.module.css";
import Button from "../Components/Button/index.js";

function Register() {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h1>Fill in your details below...</h1>
				<div className={styles.form}>
					<form>
						<label className={styles.label}>First Name</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your first name..."
						></textarea>
						<label className={styles.label}>Last Name</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your last name..."
						></textarea>
						<label className={styles.label}>Address</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your address..."
						></textarea>
						<label className={styles.label}>Contact Number</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your contact number..."
						></textarea>
						<label className={styles.label}>Email</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your email..."
						></textarea>
					</form>
					<Button text="Submit" />
				</div>
			</div>
		</>
	);
}

export default Register;
