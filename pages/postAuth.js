import React from 'react';
import { useUser } from "@auth0/nextjs-auth0";

// import { API_URL } from '../config.js';
import ListingsPage from '../Components/ListingsPage';
import ProfileReg from '../Components/ProfileReg';

const PostAuth = ({ users, listings }) => {
    
    const listing = listings;
    // Auth0 logic starts here
	const { user, error, isLoading } = useUser();

    if(isLoading) return <div>Loading ...</div>;
    if(error) return <div>{error.message}</div>;

    // console.log(users[4].email);
    // console.log(user.email);
    
    //Refactor from FOR lupe to FILTER -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    const userInOurDb = users.filter(dbuser => dbuser.email === user.email);
    
    return (
        <>
        {userInOurDb ? 
            <ListingsPage userAvatar={userInOurDb.avatar} userEmail={userInOurDb.email} listings={listing}/>
        : 
            <ProfileReg />
        }
        </>
    )
    
    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].email === user.email) {
    //         console.log(users[i].avatar)
    //         return <ListingsPage userAvatarr={users[i].avatar} userEmail={users[i].email}/>
    //     } else {
    //         return <ProfileReg />
    //     }
    // }

    // jane.wilkins@gmail.com
    // user.email
    
}

export async function getServerSideProps() {
    
        const res = await fetch(`https://it-crowd-project.herokuapp.com/api/users`);
        const data = await res.json();
      
        const rest = await fetch(`https://it-crowd-project.herokuapp.com/api/listings`);
        const ddata = await rest.json();
        // By returning { props: { allUsers } }, the PostAuth component
        // will receive `allUsers` as a prop at BUILD time
        return {
            props: 
                { users: data.payload,
                  listings: ddata.payload },
        }

        
        
  }

export default PostAuth;
