import React from "react";
import styles from "../../styles/loader.module.css";

function Loader() {
	return (
		<div className={styles.container}>
			<div className={styles.loader}>
				<div className={styles.loaderInner}>
					<div className={styles.loaderLineWrap}>
						<div className={styles.loaderLine}></div>
					</div>
					<div className={styles.loaderLineWrap}>
						<div className={styles.loaderLine}></div>
					</div>
					<div className={styles.loaderLineWrap}>
						<div className={styles.loaderLine}></div>
					</div>
					<div className={styles.loaderLineWrap}>
						<div className={styles.loaderLine}></div>
					</div>
					<div className={styles.loaderLineWrap}>
						<div className={styles.loaderLine}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Loader;
