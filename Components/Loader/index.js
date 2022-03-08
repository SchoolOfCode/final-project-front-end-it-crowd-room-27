import React from "react";
import styles from "../../styles/loader.module.css";

function Loader() {
	return (
		<div className={styles.container}>
			<div className={styles.loader}>
				<div className={styles.loaderInner}>
					<div class={styles.loaderLineWrap}>
						<div class={styles.loaderLine}></div>
					</div>
					<div class={styles.loaderLineWrap}>
						<div class={styles.loaderLine}></div>
					</div>
					<div class={styles.loaderLineWrap}>
						<div class={styles.loaderLine}></div>
					</div>
					<div class={styles.loaderLineWrap}>
						<div class={styles.loaderLine}></div>
					</div>
					<div class={styles.loaderLineWrap}>
						<div class={styles.loaderLine}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Loader;
