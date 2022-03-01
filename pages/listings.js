import React from "react";
import ListingsPage from "../Components/ListingsPage";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Listings({ users, listings }) {
	return <ListingsPage users={users} listings={listings} />;
}

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps() {
		const usersRes = await fetch(
			`https://it-crowd-project.herokuapp.com/api/users`
		);
		const usersData = await usersRes.json();

		const listingsRes = await fetch(
			`https://it-crowd-project.herokuapp.com/api/listings`
		);
		const listingsData = await listingsRes.json();
		// By returning { props: { allUsers } }, the PostAuth component
		// will receive `allUsers` as a prop at BUILD time
		return {
			props: { users: usersData.payload, listings: listingsData.payload },
		};
	},
});
