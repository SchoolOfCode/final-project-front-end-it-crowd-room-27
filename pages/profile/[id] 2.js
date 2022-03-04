import React from "react";
import Navbar from "../../Components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://it-crowd-project.herokuapp.com/api/users");
  // const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  const profiles = data.payload;
  const paths = profiles.map((profile) => {
    return {
      params: { id: profile.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://it-crowd-project.herokuapp.com/api/users/" + id
  );

  // const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(data.payload);
  return {
    props: {
      profile: data.payload[0],
    },
  };
};

const Details = ({ profile }) => {
  return (
    <div>
      <Navbar />
      <h1>Details Page</h1>

      <p>{profile.first_name}</p>
      <img src={profile.avatar}></img>
      {/* <p>{profile.email}</p>
      <p>{profile.website}</p> */}
    </div>
  );
};

export default Details;
