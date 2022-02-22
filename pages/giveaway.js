import Head from "next/head";
import styles from "../styles/giveaway.module.css";
import Navbar from "../Components/Navbar/index.js";

function Giveaway() {
   return (
      <>
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
         <Navbar />
         <div className={styles.container}>
            <div className={styles.form}>
               <form>
                  <label className={styles.label}>Product Name</label>
                  <textarea
                     className={styles.textfield}
                     placeholder=""
                  ></textarea>
                  <label className={styles.label}>Use it By</label>
                  <textarea
                     className={styles.textfield}
                     placeholder="dd/mm/yyyy"
                  ></textarea>
                  <label className={styles.label}>Quantity</label>
                  <textarea
                     className={styles.textfield}
                     placeholder="Quantity"
                  ></textarea>
                  <label className={styles.label}>Description</label>
                  <textarea
                     className={styles.textfield}
                     placeholder="Description"
                     rows="4"
                     cols="50"
                  ></textarea>
                  <select name="selectList" id="selectList">
                     <option value="Fruit">Fruit</option>
                     <option value="Vegetable">Vegetable</option>
                  </select>
                  <input type="file"></input>
               </form>
            </div>
         </div>
      </>
   );
}

export default Giveaway;
