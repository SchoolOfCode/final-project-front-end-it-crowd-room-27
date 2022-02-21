import React from "react";
import Navbar from "../Components/Navbar/index.js";
import styles from "../styles/register.module.css";

function Register() {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.form}>
					<form>
						<label className={styles.label}>TEST</label>
						<textarea className={styles.textField}></textarea>
						<label className={styles.label}>TEST</label>
						<textarea className={styles.textField}></textarea>
						<label className={styles.label}>TEST</label>
						<textarea className={styles.textField}></textarea>
						<label className={styles.label}>TEST</label>
						<textarea className={styles.textField}></textarea>
						<label className={styles.label}>TEST</label>
						<textarea className={styles.textField}></textarea>
						<label className={styles.label}>TEST</label>
						<textarea className={styles.textField}></textarea>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
