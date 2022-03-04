import React from "react";
import styles from "../../styles/searchbar.module.css";
function Searchbar({ filterListings }) {
	return (
		<div className={styles.container}>
			<h6>Search for items...</h6>
			<input
				placeholder="What are you looking for?"
				className={styles.input}
				onKeyUp={(e) => filterListings(e)}
			></input>
		</div>
	);
}

export default Searchbar;
