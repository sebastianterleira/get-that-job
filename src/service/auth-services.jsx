import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function login(credentials) {
	const {token, ...user} = await collectionClient("/login", {
	body: credentials 
	});

	sessionStorage.setItem(tokenKey, token);
	return user;
}

export async function logout() {
	await collectionClient("/logout", {
		method: "DELETE",
	});

	sessionStorage.removeItem(tokenKey);
}
