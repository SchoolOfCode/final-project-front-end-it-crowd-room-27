import React, {useState} from "react";
import { useUser } from "@auth0/nextjs-auth0";

import Navbar from "../../Components/Navbar";
import styles from "../../styles/register.module.css";
import Button from "../../Components/Button";

function ProfileReg() {

    const { user, error, isLoading } = useUser();
    
    if(isLoading) return <div>Loading ...</div>;
    if(error) return <div>{error.message}</div>;
	
	//capture form data
	const [previewSource, setPreviewSource] = useState("");
	const [firstName, setFirstName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [lastName, setLastName] = useState("");

	//an object which will represent the form data to send to the server (req.body)
	const body = {
		first_name: firstName,
		last_name: lastName,
		email: email,
		address: address,
		is_active: true,
		image: previewSource,
		user_bio: "",
	};
    // const body = firstName;
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
		    await fetch(`https://it-crowd-project.herokuapp.com/api/users`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" },
		});
	};


    // encType="multipart/form-data" method="post" action="/users"
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
							name="first_name"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						></textarea>
						<label className={styles.label}>Last Name</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your last name..."
							name="last_name"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						></textarea>
						<label className={styles.label}>Address</label>
						<textarea
							className={styles.textField}
							placeholder="Enter your address..."
							name="address"
							type="text"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
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
							name="email"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></textarea>
						<input type="file" onChange={handleFileInputChange}></input>
					</form>
					{/* 'Inline If with Logical && Operator' (to conditionally render preview) */}
					{previewSource && (
						<img src={previewSource} style={{ height: "300px" }}></img>
					)}
					<Button handleSubmit={handleSubmit} text="Submit" />
				</div>
			</div>
		</>
	);
}

export default ProfileReg;

//max chars for item description is 180
