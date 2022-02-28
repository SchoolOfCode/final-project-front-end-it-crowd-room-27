import React, {useState} from "react";
import { useUser } from "@auth0/nextjs-auth0";

import styles from "../../styles/navbar.module.css";

import Link from "next/link";
import Logo from "../../assets/logo-main.png";
import Image from "next/image";
import GiveAwayModal from "../GiveAwayModal";


function Navbar( registeredUserAvatar, userEmail, { users }) {
   //Auth0
   const { user, error, isLoading } = useUser();
console.log(user)
   if(isLoading) return <div>Loading ...</div>;
    if(error) return <div>{error.message}</div>;

  
  const [giveItemModalShow, setGiveItemModalShow] = React.useState(false);
  
  return (
    <div className={styles.top_container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={Logo} height="120em" width="120em" />
          </a>
        </Link>
      </div>
      <div className={styles.middle_container}>
        <div className={styles.GiveItemButton}>
          <button
            variant="primary"
            onClick={() => setGiveItemModalShow(true)}
            className={styles.btn}
          >
            Give Item
          </button>
          <GiveAwayModal
            show={giveItemModalShow}
            onHide={() => setGiveItemModalShow(false)}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <li className={styles.menuItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/listings">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/blog">Blog</Link>
            </li>
            
              {!user && <li className={styles.menuItem}>
                  <a href="/api/auth/login">Log In</a>
               </li>}

               {user && <li className={styles.menuItem}>
                  <a href="/api/auth/logout">Log Out</a>
               </li>}
                
          </ul>
        </div>
        <div className={styles.userImg}>

            <Link href="/profile">
               <a>
				   { user ? 
                  <img src={ registeredUserAvatar ? registeredUserAvatar : user.picture} 
                       alt={user.first_name}/> : null }
               </a>
            </Link>
         </div>
      </div>
    </div>
  );
}


// "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

export async function getServerSideProps() {
    
   const res = await fetch(`https://it-crowd-project.herokuapp.com/api/users`);
   const data = await res.json();
 
   // By returning { props: { allUsers } }, the PostAuth component
   // will receive `allUsers` as a prop at BUILD time
   return {
       props: 
           { users: data.payload },
     }
   
}
// "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
export default Navbar;
