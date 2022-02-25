import React from "react";

export const getStaticPaths = async () => {
  // const res = await fetch("https://it-crowd-project.herokuapp.com/api/users");
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  const paths = data.map((profile) => {
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
  // const res = await fetch(
  //   `https://it-crowd-project.herokuapp.com/api/users/${id}`
  // );
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      profile: data,
    },
  };
};

const Details = ({ profile }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h2>Irfan</h2>
      <p>{profile.name}</p>
      <p>{profile.email}</p>
      <p>{profile.website}</p>
    </div>
  );
};

export default Details;
