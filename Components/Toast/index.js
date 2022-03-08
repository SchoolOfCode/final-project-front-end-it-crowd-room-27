import React, { useCallback, useState, useEffect } from "react";
import styles from "../../styles/toast.module.css";

function Toast({ toastList, position, setList }) {
  //   const deleteToast = useCallback(
  //     (id) => {
  //       // console.log(id);
  //       const toastListItem = toastList.filter((e) => e.id != id);
  //       setList(toastListItem);
  //     },
  //     [toastList, setList]
  //   );
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
      //after 3s the show value sets to false
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {toastList.map((toast, i) => (
        <div
          key={i}
          style={{ backgroundColor: toast.backgroundColor }}
          className={`${styles.alert} ${styles.toast} ${styles[position]}`}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className={styles.title}>{toast.title}</p>
            <p className={styles.description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toast;
