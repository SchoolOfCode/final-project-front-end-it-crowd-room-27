import React from "react";
import ListingsPage from "../Components/ListingsPage";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { API_URL } from "../config";

console.log(API_URL);
export default function Listings({ users, listings }) {
	return <ListingsPage users={users} listings={listings} />;
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
