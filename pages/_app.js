import React from "react";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Router from "next/router";
import { useState } from "react";
import Loader from "../Components/Loader";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	const [list, setList] = useState([]);
	const [isShowAlert, setIsShowAlert] = useState(false);

	Router.events.on("routeChangeStart", (url) => {
		setLoading(true);
	});
	Router.events.on("routeChangeComplete", (url) => {
		setLoading(false);
	});

	//   console.log(list);
	let toastProperties = null;

	const showToast = (type) => {
		// console.log("show toast");
		switch (type) {
			case "green":
				toastProperties = {
					id: 1,
					title: "success",
					description: "this is a success message",
					backgroundColor: "#5cb85c",
				};
				break;
			case "red":
				toastProperties = {
					id: 2,
					title: "danger",
					description: "this is a danger message",
					backgroundColor: "#d9534f",
				};
				break;
			case "blue":
				toastProperties = {
					id: 3,
					title: "info",
					description: "this is an info message",
					backgroundColor: "#5bc0de",
				};
				break;
			case "orange":
				toastProperties = {
					id: 4,
					title: "warning",
					description: "this is a warning message",
					backgroundColor: "#f0ad4e",
				};
				break;
			case "item_upload_success":
				toastProperties = {
					id: 5,
					title: "success",
					description: "Amazing! Your item uploaded successfully",
					backgroundColor: "#5cb85c",
				};
				break;
			case "item_upload_failed":
				toastProperties = {
					id: 11,
					title: "danger",
					description: "Uh-oh! item failed to upload",
					backgroundColor: "#d9534f",
				};
				break;
			case "profile_update_success":
				toastProperties = {
					id: 6,
					title: "success",
					description: "Amazing! Your profile updated successfully",
					backgroundColor: "#5cb85c",
				};
				break;
			case "profile_update_failed":
				toastProperties = {
					id: 6,
					title: "danger",
					description: "Uh-oh! profile failed to save",
					backgroundColor: "#d9534f",
				};
				break;
			case "item_update_failed":
				toastProperties = {
					id: 7,
					title: "danger",
					description: "Uh-oh! item failed to save",
					backgroundColor: "#d9534f",
				};
				break;
			case "item_update_success":
				toastProperties = {
					id: 8,
					title: "success",
					description: "Amazing! Your item updated successfully",
					backgroundColor: "#5cb85c",
				};
				break;
			case "item_delete_success":
				toastProperties = {
					id: 9,
					title: "success",
					description: "Amazing! Your item deleted successfully",
					backgroundColor: "#5cb85c",
				};
				break;
			case "item_delete_failed":
				toastProperties = {
					id: 10,
					title: "danger",
					description: "Uh-oh! item failed to delete",
					backgroundColor: "#d9534f",
				};
				break;
			default:
				toastProperties = [];
		}

		// setList([...list, toastProperties]);
		setList([toastProperties]);
	};

	return (
		<>
			{loading && <Loader />}
			<UserProvider>
				<Component
					{...pageProps}
					toastList={list}
					isShowAlert={isShowAlert}
					setIsShowAlert={setIsShowAlert}
					showToast={showToast}
				/>
			</UserProvider>
		</>
	);
}

export default MyApp;
