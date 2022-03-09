import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../Button";
import Link from "next/link";
import styles from "../../styles/giveAwayModal.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import GiveItemSubmitButton from "../Buttons/GiveItemSubmitButton/index";
import { API_URL } from "../../config";
import Router from "next/router";

function GiveAwayModal(props) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>{error.message}</div>;

  const users = props.users;

  //currentUser matches the authenticated user with their info in our db
  const currentUser = users?.find((currUser) => currUser.email === user?.email);

  //capture form data
  const [previewSource, setPreviewSource] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [useByDate, setUseByDate] = useState("");
  const [availability, setAvailability] = useState(true);
  const [dateAdded, setDateAdded] = useState(Date.now());
  const [isReserved, setIsReserved] = useState(false);
  const [timeSlot, setTimeSlot] = useState("");

  // ADDING A CORRECT ADDING DATE
  const dated = Date.now();
  const today = new Date(dated);

  const addedDate = today.toUTCString();

  //an object which will represent the form data to send to the server (req.body)
  const body = {
    user_id: currentUser?.id,
    category: category,
    item_name: itemName,
    item_description: itemDesc,
    use_by_date: useByDate,
    date_added: addedDate,
    quantity: quantity,
    is_reserved: true,
    availability: false,
    time_slot: timeSlot,
    image: previewSource,
  };
  console.log(body);
  //when the user selects an image from their desktop, preview it in the browser
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  //convert to base64encoded image using new FileReader API
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  //stringify the body object defined above and send as req.body to server
  const handleSubmit = async () => {
    props?.setIsShowAlert(true);
    try {
      await fetch(`${API_URL}/api/items`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      if (!error) {
        props?.showToast("item_upload_success");
      }
    } catch (error) {
      console.log("error", error);
      //  console.log("post reload");
      Router.reload(window.location);
    }
  };
  //stringify the body object defined above and send as req.body to server
  // 	const handleSubmit = async () => {
  // 		try {
  // 			await fetch(`${API_URL}/api/items`, {
  // 				method: "POST",
  // 				body: JSON.stringify(body),
  // 				headers: { "Content-Type": "application/json" },
  // 			});
  // 		} catch (error) {
  // 			console.log("error", error);
  // 			error ? showToast(item_upload_failed) : null;
  // 		}

  // 		Router.reload(window.location);
  // 	};

  return (
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
        <div className={styles.bodyLeft}>
          <div className={styles.imgContainer}>
            {/* check that the user has selected a file and preview it to the left of the form */}
            {previewSource ? <img src={previewSource}></img> : null}
          </div>
        </div>
        <div className={styles.bodyRight}>
          <div className={styles.container}>
            <h1>Fill in the details below...</h1>
            <div className={styles.form}>
              <form>
                <h6>Item</h6>
                <textarea
                  className={styles.textField}
                  placeholder="What are you donating?"
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  required
                  maxlength="17"
                ></textarea>
                <h6>Category</h6>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className={styles.category}
                >
                  <option value="Fruit">Fruit</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Meat, Fish, Eggs">Meat, Fish, Eggs</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Cakes">Cakes</option>
                  <option value="Pantry items">Pantry items</option>
                  <option value="Organic waste">Organic waste</option>
                  <option value="Other">Other</option>
                </select>

                <h6>Brief Description</h6>
                <textarea
                  className={styles.textField}
                  placeholder="Briefly describe your donation.."
                  type="text"
                  value={itemDesc}
                  onChange={(e) => setItemDesc(e.target.value)}
                  required
                ></textarea>
                <h6>Best before date</h6>
                <textarea
                  className={styles.textField}
                  placeholder="Best before date..."
                  type="text"
                  value={useByDate}
                  onChange={(e) => setUseByDate(e.target.value)}
                  required
                ></textarea>
                <h6>Quantity</h6>
                <textarea
                  className={styles.textField}
                  placeholder="How much/many?"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                ></textarea>
                <h6>My Availability</h6>
                <textarea
                  className={styles.textField}
                  placeholder="Please write times when you're available.."
                  type="text"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  required
                ></textarea>
                <h6>Choose an image</h6>
                <p className="required">*image is required</p>
                <input
                  type="file"
                  onChange={handleFileInputChange}
                  required
                ></input>
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className={styles.btn}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.footer}></Modal.Footer>
    </Modal>
  );
}

export default GiveAwayModal;
