import React from "react";
import styles from "../styles/about.module.css";
import Navbar from "../Components/Navbar";

function About() {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.box1}>
					<h3></h3>
					<p>
						Phasellus mattis ac dolor eget pretium. Proin mi mi, cursus suscipit
						euismod vel, dignissim et ex. Curabitur tincidunt pellentesque
						egestas. Quisque auctor lacus quis dolor sagittis elementum.
						Maecenas malesuada consequat ligula, quis consectetur dui consequat
						vitae. Aenean ac velit porta, pellentesque quam sit amet, finibus
						risus. Aenean eros turpis, blandit vitae augue a, congue mattis mi.
						Fusce dictum mi aliquet turpis pellentesque, maximus pharetra metus
						ultrices. Cras metus elit, ultricies eu ornare non, varius eget
						massa. Suspendisse vitae massa eget diam ultricies malesuada. Cras
						tincidunt sodales elit, quis eleifend dolor iaculis vel. Proin
						mattis risus quis sagittis consectetur.
					</p>
				</div>
				<div className={styles.box2}>
					<p>
						Phasellus mattis ac dolor eget pretium. Proin mi mi, cursus suscipit
						euismod vel, dignissim et ex. Curabitur tincidunt pellentesque
						egestas. Quisque auctor lacus quis dolor sagittis elementum.
						Maecenas malesuada consequat ligula, quis consectetur dui consequat
						vitae. Aenean ac velit porta, pellentesque quam sit amet, finibus
						risus. Aenean eros turpis, blandit vitae augue a, congue mattis mi.
						Fusce dictum mi aliquet turpis pellentesque, maximus pharetra metus
						ultrices. Cras metus elit, ultricies eu ornare non, varius eget
						massa. Suspendisse vitae massa eget diam ultricies malesuada. Cras
						tincidunt sodales elit, quis eleifend dolor iaculis vel. Proin
						mattis risus quis sagittis consectetur.
					</p>
				</div>
				<div className={styles.box3}>
					<p>
						Phasellus mattis ac dolor eget pretium. Proin mi mi, cursus suscipit
						euismod vel, dignissim et ex. Curabitur tincidunt pellentesque
						egestas. Quisque auctor lacus quis dolor sagittis elementum.
						Maecenas malesuada consequat ligula, quis consectetur dui consequat
						vitae. Aenean ac velit porta, pellentesque quam sit amet, finibus
						risus. Aenean eros turpis, blandit vitae augue a, congue mattis mi.
						Fusce dictum mi aliquet turpis pellentesque, maximus pharetra metus
						ultrices. Cras metus elit, ultricies eu ornare non, varius eget
						massa. Suspendisse vitae massa eget diam ultricies malesuada. Cras
						tincidunt sodales elit, quis eleifend dolor iaculis vel. Proin
						mattis risus quis sagittis consectetur.
					</p>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps = withPageAuthRequired();

export default About;
