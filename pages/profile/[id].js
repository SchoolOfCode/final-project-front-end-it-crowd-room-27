// import React from "react";
import React from "react";

function Id() {
  return <div>'hello world'</div>;
}

export default Id;
// export const getServerSidePaths = async () => {
//   const res = await fetch("https://it-crowd-project.herokuapp.com/api/users");
//   // const res = await fetch("https://jsonplaceholder.typicode.com/users/");
//   const data = await res.json();
//   const profiles = data.payload;
//   const paths = profiles.map((profile) => {
//     return {
//       params: { id: profile.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getServerSideProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(
//     "https://it-crowd-project.herokuapp.com/api/users/" + id
//   );

//   // const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await res.json();
//   console.log(data.payload);
//   return {
//     props: {
//       profile: data.payload[0],
//     },
//   };
// };

// const Details = ({ profile }) => {
//   return (
//     <div>
//       <h1>Details Page</h1>
//       <h2>Irfan</h2>
//       <p>{profile.first_name}</p>
//       {/* <p>{profile.email}</p>
//       <p>{profile.website}</p> */}
//     </div>
//   );
// };
// export const getServerSideProps = withPageAuthRequired();

// export default Details;
