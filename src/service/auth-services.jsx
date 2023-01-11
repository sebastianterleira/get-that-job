import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function login(credentials) {
  const { ...user } = await collectionClient("/login", {
    body: credentials,
  });

  return user;
}

export async function logout() {
  await collectionClient("/logout", {
    method: "DELETE",
  });

  sessionStorage.removeItem(tokenKey);
}

export async function loginRecruiter(credentials) {
  const { ...user } = await collectionClient("/company/sign_in", {
    body: credentials,
  });

  return user;
}

export async function logoutRecruiter() {
  await collectionClient("/company/sign_out", {
    method: "DELETE",
  });

  sessionStorage.removeItem(tokenKey);
}
