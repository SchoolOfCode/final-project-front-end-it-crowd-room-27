import React, { useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import Card from "../Components/Card/index";
import Navbar from "../Components/Navbar/index.js";
import styles from "../styles/profile.module.css";
import Head from "next/head";
import EditProfileModal from "../Components/EditProfileModal";

import ProvideInfoForm from "../Components/ProvideInfoForm";

function profile({ users, listings }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>{error.message}</div>;

  const regUser = users.find((regUser) => regUser.email === user.email);

  // const particularUser = users.filter(parUser => parUser.email === user.email);

  // =-=-=-=-=-=-==-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  const [editProfileModalShow, setEditProfileModalShow] = React.useState(false);

  // console.log(showEditModal);

  function handleFormMode() {
    // setProceedUser(regUser);
    setShowEditModal(true);
  }

  const currentUser = users.find((currUser) => currUser.email === user.email);

  const userListings = listings.filter(
    (items) => items.user_id === currentUser?.id
  );

  // function onProvideSubmit(postId, language, link, summary) {
  //   const templateEditedPost = {
  //     id: postId,
  //     tags: language,
  //     summary: summary,
  //     link: link
  //   };

  //   fetch(`${API_URL}/weeks/${weekId}/resources/${postId}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(templateEditedPost),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("could not fetch the data for for that resourse");
  //       }
  //       return res.json();
  //     })
  //     .catch((err) => {
  //       //auto catches network / 
  //   is_active,
  //   cloudinary_id,
  //   avatar,
  //   user_bio } = regUser;

  return (
    <div className="main-container">
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
      </Head>
      <Navbar avatar={!regUser ? user.picture : regUser.avatar} users={users} />

      <div className={styles.flexboxContainer}>
        {/* <div className={`${styles.flexItems} ${styles.flexItem1}`}> */}

        {/* <div className={styles.userImg}> */}
        {/* <Link href="/">
              <a>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </a>
            </Link> */}
        {/* </div> */}
        {/* <span className={`fa fa-camera ${styles.camera}`}></span>
          <div className={styles.stars}>
            <span className={`fa fa-star ${styles.checked}`}></span>
            <span className={`fa fa-star ${styles.checked}`}></span>
            <span className={`fa fa-star ${styles.checked}`}></span>
            <span className={`fa fa-star ${styles.checked}`}></span>
            <span class="fa fa-star"></span>
          </div> */}

        {/* </div> */}
        <div className={styles.profileTopContainer}>
          <div className={styles.profileContainer}>
            <div className={styles.imageContainer}>
              <img
                className={styles.userImg}
                src={!regUser ? user.picture : regUser.avatar}
              />
              <div className={styles.profileInfoBox}>
                <div className={styles.block1}>
                  <p className={styles.profileTitle}>
                    Full Name:{" "}
                    {regUser
                      ? `${regUser.first_name} ${regUser.last_name}`
                      : null}
                  </p>
                </div>

                <div className={styles.block3}>
                  <p className={styles.profileTitle}>Email: {user.email} </p>
                </div>

                <div className={styles.block2}>
                  <p className={styles.profileTitle}>
                    Address: {regUser ? `${regUser.address}` : null}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.bioBox}>
              <p className={styles.profileTitle}>Bio</p>
              <p>{regUser ? `${regUser.user_bio}` : null}</p>
            </div>
          </div>

          <div className={styles.buttons}>
            <p className={styles.editBtn}>Edit</p>
            {/* <p className={styles.editBtn} onClick={() => handleFormMode()}>
							Finish Profile
						</p> */}
            <button
              variant="primary"
              onClick={() => setEditProfileModalShow(true)}
              className={styles.btn}
            >
              Finish profile
            </button>
            <EditProfileModal
              users={users}
              show={editProfileModalShow}
              onHide={() => setEditProfileModalShow(false)}
            />
          </div>
          {/* <ProvideInfoForm
						showEditModal={showEditModal}
						setShowEditModal={setShowEditModal}
					/> */}
        </div>
      </div>
      <div className={styles.btnSection}>
        <button className={styles.giveBtn}>Give Item</button>
        <button className={styles.searchBtn}>Search Item</button>
      </div>

      <h2 className={styles.title}>My Listing</h2>

      {/*  */}
      <div className={`${styles.flexItems} ${styles.flexItem3}`}>
        {/* USER ID FOR FETCHING ITEMS */}
        {/* <Card userID={id} /> */}

        {userListings?.map((listing) => (
          <Card
            item_id={listing.id}
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
            user_bio={listing.user_bio}
          />
        ))}
      </div>
    </div>
    // </div>
  );
}

//Fetching data to PROPS
// export async function getServerSideProps() {

//   const res = await fetch(`https://it-crowd-project.herokuapp.com/api/users`);
//   const data = await res.json();

//   // By returning { props: { allUsers } }, the PostAuth component
//   // will receive `allUsers` as a prop at BUILD time
//   return {
//       props:
//           { users: data.payload },
//     }

// }

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    const usersRes = await fetch(
      `https://it-crowd-project.herokuapp.com/api/users`
    );
    const usersData = await usersRes.json();

    const listingsRes = await fetch(
      `https://it-crowd-project.herokuapp.com/api/listings`
    );
    const listingsData = await listingsRes.json();
    // By returning { props: { allUsers } }, the PostAuth component
    // will receive `allUsers` as a prop at BUILD time
    return {
      props: { users: usersData.payload, listings: listingsData.payload },
    };
  },
});

export default profile;
