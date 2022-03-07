import { useUser } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../Components/Card/index";
import Navbar from "../Components/Navbar/index";
import styles from "../styles/home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {

  Banner,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,

  ContactUs,
  Copyright,


} from "../Components/LandingPageComps/landingPageComps.js";

export default function Home({ users }) {
  const { user, error, isLoading } = useUser();
//   const [showScroll, setShowScroll] = useState(true);

//   const checkScrollTop = () => {
//     if (!showScroll && window.pageYOffset > 400) {
//       setShowScroll(true);
//     } else if (showScroll && window.pageYOffset <= 400) {
//       setShowScroll(false);
//     }
//   };
//   React.useEffect(() => {
//     window.addEventListener("scroll", checkScrollTop);
//     return;
//   }, []);

  if (isLoading)
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  if (error) return <div>{error.message}</div>;

  const currentUser = users?.find((currUser) => currUser.email === user?.email);

  return (
    <div className={styles.container}>
      <Head>
        <title>iGive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Navbar
        avatar={!currentUser ? user?.picture : currentUser?.avatar}
        users={users}
      />

      <Banner />
      <main className={styles.main}>
        {/* {user ? <Reg/> : <List/>} */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <ContactUs />
        <SectionFour />
        {/* <Copyright style={{ display: showScroll ? "fixed" : "none" }} /> */}
        <Copyright />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const usersRes = await fetch(
    `https://it-crowd-project.herokuapp.com/api/users`
  );
  const usersData = await usersRes.json();

  return {
    props: { users: usersData.payload },
  };
};
