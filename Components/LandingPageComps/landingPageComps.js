import React from "react";
import styles from "../../styles/home.module.css";
import { ScrollArrow } from "../ScrollToTop/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInView } from "react-intersection-observer";

export function Banner() {
	return (
		<div className={styles.cover}>
			<div className={styles.top}>
				<div className={styles.inner_top}>
					<h1 className={styles.title}>
						Ready to fight<br></br> food waste?
					</h1>
				</div>
			</div>
		</div>
	);
}

export function SectionOne() {
	const { ref: secOne, inView: isVisible } = useInView({
		threshold: 0.8,
	});
	return (
		<>
			<div className={styles.flexboxContainer} ref={secOne}>
				<div className={styles.flexItem1}>
					<h1 className={styles.welcome}>Welcome to iGive</h1>
					<h3
						className={`${styles.articleTitle} 
					${isVisible ? styles.fadeIn : ""}`}
					>
						Our Story!
					</h3>
					<p
						className={`${styles.article} 
					${isVisible ? styles.fadeIn : ""}`}
					>
						Food waste is one of the largest contributors to climate change. At
						the moment many products are made, used and needlessly thrown away,
						contributing to climate change and environmental damage.<br></br>
						<br></br> Many people would prefer a lower carbon and lower cost
						solution for their food which we can enable through our app ‘iGive’.
						<br></br>
						<br></br>iGive is a community based app for people to share their
						unwanted products which could be useful elsewhere. Unwanted food
						items can be shared through the community by using our app.
					</p>
				</div>
			</div>
		</>
	);
}

export function SectionTwo() {
	const { ref: secTwo, inView: isVisible } = useInView({
		threshold: 0.3,
	});

	return (
		<div className={styles.flexboxContainer} ref={secTwo}>
			<div className={styles.flexItem1}>
				<h3
					className={`${styles.useDescription} 
					${isVisible ? styles.fadeIn : ""}`}
				>
					How iGive Works!
				</h3>
				<video
					className={`${styles.video} ${isVisible ? styles.appear : ""}`}
					src="https://dl.dropboxusercontent.com/s/o05o98mpe43audn/Screen%20Recording%202022-03-06%20at%2014.35.29.mov?dl=0"
					loop
					muted
					type="video/mp4"
					onMouseEnter={(e) => e.currentTarget.play()}
					onMouseOut={(e) => e.currentTarget.pause()}
				></video>
			</div>
		</div>
	);
}

export function SectionThree() {
	const { ref: secThree, inView: isVisible } = useInView({
		threshold: 0.5,
	});
	return (
		<div className={styles.flexboxContainer} ref={secThree}>
			<div className={styles.flexItem1}>
				<h3
					className={`${styles.cards_title} 
					${isVisible ? styles.fadeIn : ""}`}
				>
					Hear What Our<br></br> Customers are Saying
				</h3>

				<div className={styles.cards_cover}>
					<div
						className={`${styles.card1} 
					${isVisible ? styles.fadeIn : ""}`}
					>
						<p className={styles.comment_author}>
							"I used to throw away veggies that were about to expire. Now I
							save money and reduce food waste"
						</p>
						<span className={styles.raiting_author}>5 stars</span>
						<p className={styles.feedback_author}>Mike From Derby</p>
					</div>

					<div
						className={`${styles.card2} 
					${isVisible ? styles.fadeIn : ""}`}
					>
						<p className={styles.comment_author}>
							"Great app to use I have reduced my food waste by 50% since I
							started using it, recommended 100%"
						</p>
						<span className={styles.raiting_author}>5 stars</span>
						<p className={styles.feedback_author}>Sarah From London</p>
					</div>

					<div
						className={`${styles.card3} 
					${isVisible ? styles.fadeIn : ""}`}
					>
						<p className={styles.comment_author}>
							"Excellant idea, I feed bad when I have to throw away food, why
							not give to someone who needs it! "
						</p>
						<span className={styles.raiting_author}>5 stars</span>
						<p className={styles.feedback_author}>Amy From Liverpool</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export function SectionFour() {
	return (
		<div className={styles.flexboxContainer}>
			<div className={styles.flexItem1}>
				<h3 className={styles.cards_title}>Featured In</h3>
				<div className={styles.flexItem2}>
					<img
						className={styles.featured_logo}
						src="https://www.chalegrove.co.uk/wp-content/uploads/2018/12/sunday-times.jpg"
					/>
					<img
						className={styles.featured_logo}
						src="https://www.logolynx.com/images/logolynx/2d/2d71f43a8bca9f5c33ad507415e303af.jpeg"
					/>
					<img
						className={styles.featured_logo}
						src="https://media.info/i/lf/0/1442315133/1571.png"
					/>
					<img
						className={styles.featured_logo}
						src="https://www.tabletalkmedia.co.uk/wp-content/uploads/2015/04/hello.png"
					/>
				</div>
			</div>
		</div>
	);
}

export function ContactUs() {
	return (
		<div className="container">
			<h1 className={styles.formTitle}>Need help? Get in touch</h1>
			<form
				target="_blank"
				action="https://formsubmit.co/irfan185@gmail.com"
				method="POST"
			>
				<div className="form-group">
					<div className="form-row">
						<div className="col">
							<input
								type="text"
								name="name"
								className="form-control"
								placeholder="Full Name"
								required
							/>
						</div>
						<div className="col">
							<input
								type="email"
								name="email"
								className="form-control"
								placeholder="Email Address"
								required
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<textarea
						placeholder="Your Message"
						className="form-control"
						name="message"
						rows="10"
						required
					></textarea>
				</div>
				<button type="submit" className={styles.button}>
					Submit
				</button>
			</form>
		</div>
	);
}

export function Copyright({ showScroll }) {
	return (
		<div className={styles.footer}>
			<p className={styles.cast}>
				created by <strong>IT-Crowd</strong>
				<br /> Simren, Lilly-Ane, Irfan, Thuan, Rory, Dmitriy
			</p>
			<ScrollArrow showScroll={showScroll} />
		</div>
	);
}
