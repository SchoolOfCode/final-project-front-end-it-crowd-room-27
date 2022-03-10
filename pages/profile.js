import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Card from "../Components/Card/index";
import Navbar from "../Components/Navbar/index.js";
import Head from "next/head";
import { API_URL } from "../config";
import DeleteModal from "../Components/DeleteModal";
import styles from "../styles/profile.module.css";
import Router from "next/router";
import pic from "../banner.png";
import Image from "next/image";

import Toast from "../Components/Toast/index.js";

function profile({
  users,
  listings,
  toastList,
  showToast,
  isShowAlert,
  setIsShowAlert,
}) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  const [updatedListings, setUpdatedListings] = useState([]);

  const currentUser = users.find((currUser) => currUser.email === user.email);
  const userListings = listings.filter(
    (items) => items.user_id === currentUser?.id
  );

  const [previewSource, setPreviewSource] = useState(currentUser?.avatar);
  const [tempPreviewSource, setTempPreviewSource] = useState(user.picture);
  // const [btnVisible, setBtnVisible] = useState(true);
  const [fullName, setFullName] = useState(currentUser?.full_name);
  const [address, setAddress] = useState(currentUser?.address);
  const [deleteUserModalShow, setDeleteUserModalShow] = useState(false);
  const [compProfile, setCompProfile] = useState();

  const email = user.email;
  // const [lastName, setLastName] = useState("");
  const [userBio, setUserBio] = useState(currentUser?.user_bio);

  // an object which will represent the form data to send to the server (req.body)
  const body = {
    full_name: fullName,
    email: email,
    address: address,
    is_active: true,
    image: previewSource,
    user_bio: userBio,
  };

  //when the user selects an image from their desktop, preview it in the browser
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    // console.log('Hello', e.target);
  };

  //convert to base64encoded image using new FileReader API
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setTempPreviewSource(reader.result);
    };
  };

  // =-=-=-=-=-=-=- CREATE NEW PROFILE RECORD IN DATABASE =-==-=-=-=--=-=-

  const handleRegistration = async () => {
    await fetch(`${API_URL}/api/users`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    setButtonsToggle(!buttonsToggle);
    setPreviewSource(null);
    setCompProfile(true);
  };

  useEffect(() => {
    setUpdatedListings(userListings);
  }, []);

  const [buttonsToggle, setButtonsToggle] = useState(false);

  // =-=-=-=-=-=-=- EDIT EXISTITNG PROFILE =-==-=-=-=--=-=-
  const uID = currentUser?.id;
  console.log(uID);
  const handleEdit = async () => {
    try {
      setIsShowAlert(true);
      await fetch(`${API_URL}/api/users/${uID}`, {
        method: "PUT",
        // method: "asdasjdnaskjdnaknsj",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      if (!error) {
        showToast("profile_update_success");
      }
    } catch (error) {
      showToast("profile_update_failed");
      console.log("error", error);
    }

    setButtonsToggle(!buttonsToggle);
    setPreviewSource(null);
    Router.reload(window.location);
  };

  // =-=-=-=-=-=-=- DELETE EXISTITNG CARD FROM DATABASE =-==-=-=-=--=-=-

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      setIsShowAlert(true);
      const res = await fetch(`${API_URL}/api/items/${id}`, {
        method: "DELETE",
        // method: "asdasdasdasd",
      });
      // const data = await res.json();
      // console.log(data);
      setUpdatedListings(
        updatedListings.filter((listing) => listing.item_id !== id)
      );

      if (!error) {
        showToast("item_delete_success");
      }
    } catch (error) {
      showToast("item_delete_failed");
      console.log("error", error);
    }
    Router.reload(window.location);
  };

  // BUTTONS HANDLERS
  const handleBackFromEdit = () => {
    setButtonsToggle(!buttonsToggle);
  };

  const handleFinishProfile = () => {
    setButtonsToggle(!buttonsToggle);
  };

  function handleName(event) {
    const name = event.target.value;
    setFullName(name);
  }
  function handleAddress(event) {
    const address = event.target.value;
    setAddress(address);
  }
  function handleBio(event) {
    const bio = event.target.value;
    setUserBio(bio);
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <Head>
            <title>iGive</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            </style>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
          </Head>
          <Navbar
            avatar={!currentUser ? tempPreviewSource : currentUser.avatar}
            users={users}
          />

          <div className={styles.profileTopContainer}>
            <div className={styles.topContainer}>
              <div className={styles.bannerContainer}>
                
                <Image
                  className={styles.bannerImage}
								  src={pic}
                  alt="banner"
							  />
                <div className={styles.cover}>
                  <img
                    className={styles.userImg}
                    src={!currentUser ? tempPreviewSource : currentUser.avatar}
                  />
                </div>
              </div>

              <div className={styles.infoCover}>
                <div className={styles.infoContainer}>
                  <p className={styles.profileTitle}>
                    {" "}
                    <strong>Full Name:</strong>{" "}
                    {!buttonsToggle ? (
                      fullName
                    ) : (
                      <input
                        type="text"
                        onChange={handleName}
                        value={fullName}
                      />
                    )}
                  </p>

                  <p className={styles.profileTitle}>
                    {" "}
                    <strong>Local Area:</strong>{" "}
                    {!buttonsToggle ? (
                      address
                    ) : (
                      <input
                        type="text"
                        onChange={handleAddress}
                        value={address}
                      />
                    )}
                  </p>

                  <p className={styles.profileTitle}>
                    <strong>Email:</strong> {user.email}
                  </p>

                  {!buttonsToggle ? null : (
                    <input type="file" onChange={handleFileInputChange}></input>
                  )}
                  {buttonsToggle ? (
                    <img
                      src={previewSource}
                      style={{
                        height: "125px",
                        width: "125px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    ></img>
                  ) : null}
                </div>

                {/* EDIT PROFILE SET OF BUTTONS */}
                {compProfile || (user && currentUser?.email === user.email) ? (
                  <div className={styles.buttons}>
                    {!buttonsToggle ? (
                      <button
                        variant="primary"
                        onClick={() => handleBackFromEdit()}
                        className={styles.editingBtn}
                      >
                        {" "}
                        <span class="material-icons-outlined material-icons">
                          {" "}
                          edit
                        </span>{" "}
                      </button>
                    ) : null}

                    {buttonsToggle ? (
                      <div className={styles.buttonsSet}>
                        <button
                          variant="primary"
                          onClick={() => handleEdit()}
                          className={styles.btn}
                        >
                          {" "}
                          Save{" "}
                        </button>

                        <button
                          variant="primary"
                          onClick={() => handleBackFromEdit()}
                          className={styles.btn}
                        >
                          {" "}
                          Back{" "}
                        </button>

                        <div className={styles.GiveItemButton}>
                          <button
                            variant="primary"
                            onClick={() => setDeleteUserModalShow(true)}
                            className={styles.deleteBtn}
                          >
                            {" "}
                            Delete Profile{" "}
                          </button>
                          <DeleteModal
                            id={uID}
                            show={deleteUserModalShow}
                            onHide={() => setDeleteUserModalShow(false)}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {/* FINISH PROFILE SET OF BUTTONS */}
                {!currentUser && !compProfile ? (
                  <div className={styles.buttons}>
                    {!buttonsToggle ? (
                      <button
                        variant="primary"
                        onClick={() => handleFinishProfile()}
                        className={styles.finishProfile}
                      >
                        Finish profile
                      </button>
                    ) : null}

                    {buttonsToggle ? (
                      <div className={styles.buttonsSet}>
                        <button
                          variant="primary"
                          onClick={() => handleRegistration()}
                          className={styles.btn}
                        >
                          {" "}
                          Save{" "}
                        </button>

                        <button
                          variant="primary"
                          onClick={() => handleFinishProfile()}
                          className={styles.btn}
                        >
                          {" "}
                          Back{" "}
                        </button>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div className={styles.bioBox}>
                <p className={styles.profileTitle}>
                  <strong>Bio</strong>
                </p>

                <p>
                  {!buttonsToggle ? (
                    userBio
                  ) : (
                    <textarea
                      type="text"
                      onChange={handleBio}
                      width="250px"
                      height="150px"
                      maxLength="75"
                      value={userBio}
                    />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className={styles.title}>My Listings...</h2>

        <div className={styles.itemsContainer}>
          {updatedListings?.map((listing) => (
            <Card
              user={user}
              full_name={listing.full_name}
              item_id={listing.item_id}
              user_id={listing.user_id}
              category={listing.category}
              item_name={listing.item_name}
              item_description={listing.item_description}
              use_by_date={listing.use_by_date}
              date_added={listing.date_added}
              quantity={listing.quantity}
              item_image={listing.item_image}
              is_reserved={listing.is_reserved}
              availability={listing.availability}
              time_slot={listing.time_slot}
              cloudinary_id={listing.cloudinary_id}
              avatar={listing.avatar}
              address={listing.address}
              user_bio={listing.user_bio}
              currentUser={currentUser}
              handleDelete={handleDelete}
              updatedListings={updatedListings}
              showToast={showToast}
              isShowAlert={isShowAlert}
              setIsShowAlert={setIsShowAlert}
            />
          ))}
        </div>
      </div>
      <Toast
        toastList={toastList}
        position="top-right"
        isShowAlert={isShowAlert}
        setIsShowAlert={setIsShowAlert}
      />
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    const usersRes = await fetch(`${API_URL}/api/users`);
    const usersData = await usersRes.json();
    const listingsRes = await fetch(`${API_URL}/api/listings`);
    const listingsData = await listingsRes.json();
    // By returning { props: { allUsers } }, the PostAuth component
    // will receive `allUsers` as a prop at BUILD time
    return {
      props: { users: usersData.payload, listings: listingsData.payload },
    };
  },
});
export default profile;
