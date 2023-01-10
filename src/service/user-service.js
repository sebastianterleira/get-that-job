import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createUser(userData) {
  const { token, ...user } = await collectionClient("/users", {
    body: userData,
  });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await collectionClient("/profile", {

  });
 
  return user;
}
