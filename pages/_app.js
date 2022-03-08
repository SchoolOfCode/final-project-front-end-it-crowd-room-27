import React from "react";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Router from "next/router";
import { useState } from "react";
import Loader from "../Components/Loader";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	Router.events.on("routeChangeStart", (url) => {
		console.log("loading");
		setLoading(true);
	});
	Router.events.on("routeChangeComplete", (url) => {
		console.log("loaded");
		setLoading(false);
	});

	return (
		<>
			{loading && <Loader />}
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</>
	);
}

export default MyApp;
