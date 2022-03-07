import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Modal from "react-bootstrap/Modal";
import styles from '../../styles/deleteModal.module.css';

const DeleteModal = ( props ) => {
const userId = props.id;

const [confirmDeleteProfile, setConfirmDeleteProfile] = useState('');
const [logOff, setLogOff] = useState('');


    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading ...</div>;
    if (error) return <div>{error.message}</div>;


    // =-==-=-=-=-=-=- DELETE EXISTITNG USER PROFILE FROM DATABASE =-==-=-=-=--=-=-

const confirmDelete = (e) => {
  const email = e.target.value;
  { user?.email === email ? setConfirmDeleteProfile(email) : null };
}



console.log(confirmDeleteProfile)
console.log(user.email)
console.log(logOff)

const handleDeleteProfile = async () => {
  
  {confirmDeleteProfile ? 
     await fetch(
        `https://it-crowd-project.herokuapp.com/api/users/${userId}`,
        {
          method: "DELETE",
        }
      ) 
    //   && setLogOff("/api/auth/logout")
    : null
  }
  
  //           
  // setUpdatedListings(
  //   updatedListings.filter((listing) => listing.item_id !== id)
  // );
}

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton className={styles.header}>
            <h1>Give Away an Item</h1>
        </Modal.Header>
        <Modal.Body className={styles.body}>
            

            <div className={styles.bodyRight}>
            <div className={styles.container}>
                <h1>Delete your currant profile</h1>
                <div className={styles.form}>
                    <form>
                        <h6>To delete your current profile type your email {user.email} bellow:</h6>
                        <input
                            className={styles.textField}
                            placeholder="Your email here ..."
                            type="text"
                            onChange={(e) => confirmDelete(e)}
                            required
                        />
                    </form>
                </div>
            </div>
            </div>
      </Modal.Body>

      <Modal.Footer className={styles.footer}>
        <button onClick={(props.onHide, handleDeleteProfile)} className={styles.btn}>
          {/* <a href={logOff}></a> */}Confirm
        </button>
      </Modal.Footer>
    </Modal>
    )
}

export default DeleteModal;