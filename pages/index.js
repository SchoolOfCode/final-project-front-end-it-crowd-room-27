import Head from "next/head";
import Image from "next/image";
import Card from "../Components/Card/index";
import Navbar from "../Components/Navbar/index";
import styles from "../styles/home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Top, Middle, Bottom } from "../Components/LandingPageComps/landingPageComps.js";



export default function Home() {
	return (
		<div>
			<Head>
				<title>iGive</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
			</Head>
			<Navbar />

			<div className={styles.container}>
				<main className={styles.main}>
					<Top />
					<Middle />
					<Bottom />
				</main>
			</div>
		</div>
	);
}
