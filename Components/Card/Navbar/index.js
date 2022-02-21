import React from "react";
import styles from "../../../styles/navbar.module.css";
import Link from "next/link";
import Logo from "../../../assets/logo-main.png";
import Image from "next/image";

function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/">
					<a>
						<Image src={Logo} height="120em" width="120em" />
					</a>
				</Link>
			</div>
			<div className={styles.menu}>
				<ul>
					<li className={styles.menuList}>
						<Link href="/">
							<a>Login</a>
						</Link>
					</li>
					<li className={styles.menuList}>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li className={styles.menuList}>
						<Link href="/listings">
							<a>Home</a>
						</Link>
					</li>
					<li className={styles.menuList}>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.userImg}>
				<Link href="/">
					<a>
						<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
					</a>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
