import React, { useState } from "react";
import styles from "../../styles/alert.module.css";
import AlertButton from "../Buttons/AlertButtons";
import Toast from "../Toast/index.js";

function Alerts() {
  const [list, setList] = useState([]);
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
      default:
        toastProperties = [];
    }

    // setList([...list, toastProperties]);
    setList([toastProperties]);
  };

  return (
    <div className={styles.alert}>
      <h1> Alert component</h1>
      <div className={styles.buttons}>
        <AlertButton handleClick={() => showToast("green")}>
          Success
        </AlertButton>
        <AlertButton handleClick={() => showToast("red")}>Red</AlertButton>
        <AlertButton handleClick={() => showToast("blue")}>Blue</AlertButton>
        <AlertButton handleClick={() => showToast("orange")}>
          Orange
        </AlertButton>
      </div>
      <Toast toastList={list} position="top-right" setList={setList} />
    </div>
  );
}

export default Alerts;
