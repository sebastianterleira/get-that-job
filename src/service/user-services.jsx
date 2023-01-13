import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createUser(userData) {
  const { token, ...user } = await collectionClient("/users", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(data) {
	const {token, ...user} = await collectionClient("/profile", {
		body: data,
		method: "PATCH",
	});

	sessionStorage.setItem(tokenKey, token);
	return user;
}

export async function getJobs() {
	return await collectionClient("/jobs")
}

export async function getUser(data) {
	const { token, ...user } = await collectionClient("/profile", {
		body: data,
		method: "PATCH",
	});

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getRecruiter() {
  const { ...user } = await collectionClient("/profile_company");

  return user;
}

