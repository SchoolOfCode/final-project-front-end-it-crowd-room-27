import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Card from "../../Components/Card/index";
import Navbar from "../../Components/Navbar/index.js";
import styles from "../../styles/profile.module.css";
import Head from "next/head";
import { API_URL } from "../../config";
import pic from "../../banner.png";
import Image from "next/image";

export const getStaticPaths = async () => {
	const res = await fetch(`${API_URL}/api/users`);
	const data = await res.json();
	const users = data.payload;
	const paths = users.map((user) => {
		return {
			params: { id: user.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps = async (ctx) => {
	const id = ctx.params.id;
	const dbUsersRes = await fetch(`${API_URL}/api/users`);
	const dbUsersData = await dbUsersRes.json();
	const dbListingsRes = await fetch(`${API_URL}/api/listings`);
	const dbListingsData = await dbListingsRes.json();
	const staticRes = await fetch(`${API_URL}/api/users/` + id);
	const staticData = await staticRes.json();
	return {
		props: {
			currentUser: staticData.payload[0],
			listings: dbListingsData.payload,
			users: dbUsersData.payload,
		},
	};
};

export default withPageAuthRequired(function Profile({
	users,
	listings,
	currentUser,
}) {
	useEffect(() => {
		setUpdatedListings(userListings);
	}, []);
	const [editProfileModalShow, setEditProfileModalShow] = React.useState(false);
	const [updatedListings, setUpdatedListings] = useState(listings);
	const [buttonsToggle, setButtonsToggle] = useState(false);
	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>Loading ...</div>;
	if (error) return <div>{error.message}</div>;

	const authUser = users.find((currUser) => currUser.email === user.email);

	const userListings = listings.filter(
		(items) => items.user_id === currentUser.id
	);
	const handleDelete = async (id) => {
		try {
			const res = await fetch(`${API_URL}/api/items/${id}`, {
				method: "DELETE",
			});
			const data = await res.json();
			setUpdatedListings(
				updatedListings.filter((listing) => listing.item_id !== id)
			);
		} catch (error) {
			console.log("error", error);
			error ? showToast(could_not_delete) : null;
		}
	};

	const handleEdit = () => {
		setButtonsToggle(!buttonsToggle);
	};

	const handleFinishProfile = () => {
		setButtonsToggle(!buttonsToggle);
	};

	// const sign = false;
	// const nameLine = currentUser ? `  ${currentUser.full_name}` : null;
	// const addressLine = currentUser ? `  ${currentUser.address}` : null;
	// const emailLine = currentUser ? `  ${currentUser.email}` : null;
	// const bioLine = currentUser ? `  ${currentUser.user_bio}` : null;

	return (
		<div className={styles.mainContainer}>
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
			<Navbar
				avatar={!currentUser ? user.picture : authUser?.avatar}
				users={users}
			/>

			<div className={styles.profileTopContainer}>
				<div className={styles.topContainer}>
					<div className={styles.bannerContainer}>
						<Image
                  			className={styles.bannerImage}
							src={pic}
                  			alt="banner"
						/>
						<div className={styles.cover}>
							<img
								className={styles.userImg}
								src={!currentUser ? user.picture : currentUser.avatar}
							/>
						</div>
					</div>

					<div className={styles.infoCover}>
						<div className={styles.infoContainer}>
							<p className={styles.profileTitle}>
								{" "}
								<strong>Full Name:</strong> {currentUser.full_name}
							</p>
							<p className={styles.profileTitle}>
								{" "}
								<strong>Local Area:</strong> {currentUser.address}
							</p>
						</div>
					</div>
					<div className={styles.bioBox}>
						<p className={styles.profileTitle}>
							<strong>Bio</strong>
						</p>
						<p>{currentUser.user_bio}</p>
					</div>
				</div>

				<h4 className={styles.title}>My Listings</h4>
				<div className={styles.itemsContainer}>
					{/* USER ID FOR FETCHING ITEMS */}

					{updatedListings ? (
						updatedListings?.map((listing) => (
							<Card
								handleDelete={handleDelete}
								item_id={listing.item_id}
								user_id={listing.user_id}
								category={listing.category}
								full_name={listing.full_name}
								item_name={listing.item_name}
								item_description={listing.item_description}
								use_by_date={listing.use_by_date}
								date_added={listing.date_added}
								quantity={listing.quantity}
								item_image={listing.item_image}
								is_reserved={listing.is_reserved}
								availability={listing.availability}
								address={listing.address}
								time_slot={listing.time_slot}
								cloudinary_id={listing.cloudinary_id}
								avatar={listing.avatar}
								user_bio={listing.user_bio}
								currentUser={currentUser}
							/>
						))
					) : (
						<h3 style={{ textAlign: "center", paddingTop: ".8em" }}>
							There are no items just yet... :(
						</h3>
					)}
				</div>
			</div>
		</div>
	);
});
