import React, { useState } from "react";
import styles from  "./provideInfoForm.module.css";

import FormInputs from "../FormInputs";

function ProvideInfoForm({ showEditModal, setShowEditModal }) {
	
	// if(proceedUser) {
	// 	const userId = proceedUser.id;
	// }

	

	if (showEditModal) {
		return (
			<div className={styles.windowModal}>
				<div className={styles.window}>
					<span className={styles.close} onClick={() => setShowEditModal(false)}>
						&times;
					</span>
					<h2 className={styles.windowitle}>PROVIDE REGISTRATION INFORMATION</h2>
					<FormInputs  setShowEditModal={setShowEditModal} />
				</div>
			</div>
		);
	}

	return null;
}

export default ProvideInfoForm;