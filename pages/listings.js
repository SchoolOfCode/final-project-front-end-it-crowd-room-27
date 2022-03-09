import React, { useState } from "react";
import ListingsPage from "../Components/ListingsPage";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { API_URL } from "../config";

import Toast from "../Components/Toast/index.js";
import styles from "../styles/alert.module.css";

console.log(API_URL);

export default function Listings({ users, listings }) {
  const [list, setList] = useState([]);
  const [isShowAlert, setIsShowAlert] = useState(false);

  console.log(list);
  let toastProperties = null;

  const showToast = (type) => {
    // console.log("show toast");
    switch (type) {
      case "green":
        toastProperties = {
          id: 1,
          title: "success",
          description: "this is a success message",
          backgroundColor: "#5cb85c",
        };
        break;
      case "red":
        toastProperties = {
          id: 2,
          title: "danger",
          description: "this is a danger message",
          backgroundColor: "#d9534f",
        };
        break;
      case "blue":
        toastProperties = {
          id: 3,
          title: "info",
          description: "this is an info message",
          backgroundColor: "#5bc0de",
        };
        break;
      case "orange":
        toastProperties = {
          id: 4,
          title: "warning",
          description: "this is a warning message",
          backgroundColor: "#f0ad4e",
        };
        break;
      case "item_upload_success":
        toastProperties = {
          id: 5,
          title: "success",
          description: "Amazing! Your item has been successfully uploaded",
          backgroundColor: "#5cb85c",
        };
        break;
      default:
        toastProperties = [];
    }

    // setList([...list, toastProperties]);
    setList([toastProperties]);
  };

  return (
    <>
      <div className={styles.alert}>
        <ListingsPage
          users={users}
          listings={listings}
          showToast={showToast}
          isShowAlert={isShowAlert}
          setIsShowAlert={setIsShowAlert}
        />

        <Toast
          toastList={list}
          position="top-right"
          isShowAlert={isShowAlert}
          setIsShowAlert={setIsShowAlert}
        />
      </div>
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
