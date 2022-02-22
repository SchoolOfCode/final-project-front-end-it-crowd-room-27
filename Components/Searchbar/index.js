import React from "react";
import styles from "../../styles/searchbar.module.css";
function Searchbar() {
	return (
		<div className={styles.container}>
			<h6>Search for items...</h6>
			<input
				placeholder="What are you looking for?"
				className={styles.input}
			></input>
		</div>
	);
}

export default Searchbar;
