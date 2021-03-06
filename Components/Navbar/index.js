import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../../styles/navbar.module.css";
import Link from "next/link";
import Logo from "../../assets/logo-main.png";
import Image from "next/image";
import GiveAwayModal from "../GiveAwayModal";

function Navbar({ avatar, users, showToast, isShowAlert, setIsShowAlert }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>{error.message}</div>;

  const [giveItemModalShow, setGiveItemModalShow] = React.useState(false);

  //currentUser matches the authenticated user with their info in our db
  const currentUser = users.find((currUser) => currUser.email === user?.email);

  return (
    <div className={styles.top_container}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.logo_image}>
            <Image src={Logo} height="120em" width="120em" />
          </a>
        </Link>

        <div className={styles.GiveItemButton}>
          {currentUser ? (
            <button
              variant="primary"
              onClick={() => setGiveItemModalShow(true)}
              className={styles.btn}
            >
              Give Item
            </button>
          ) : null}
          <GiveAwayModal
            users={users}
            show={giveItemModalShow}
            onHide={() => setGiveItemModalShow(false)}
            showToast={showToast}
            isShowAlert={isShowAlert}
            setIsShowAlert={setIsShowAlert}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <li className={styles.menuItem}>
              <Link href="/listings">Listings</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/">About</Link>
            </li>
            {/* if user isn't logged in  - display the login button */}
            {!user && (
              <li className={styles.menuItem}>
                <a href="/api/auth/login">Log In</a>
              </li>
            )}
            {/* if there is logged in- display the logout button */}
            {user && (
              <li className={styles.menuItem}>
                <a href="/api/auth/logout">Log Out</a>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.userImg}>
          {/* if user is logged in, let their profile picture link to their profile */}
          <Link href="/profile">
            <a>
              {user ? <img src={avatar || user.picture} alt="avatar" /> : null}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
