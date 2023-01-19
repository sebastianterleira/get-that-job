import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function login(credentials) {
  const { data } = await collectionClient("/user/sign_in", {
    body: credentials,
  });

  return data;
}

export async function loginRecruiter(credentials) {
  const { data } = await collectionClient("/company/sign_in", {
    body: credentials,
  });
  return data;
}

export async function logoutRecruiter() {
  await collectionClient("/company/sign_out", {
    method: "DELETE",
  });

  sessionStorage.removeItem(tokenKey);
}

export async function loginProfessional(credentials) {
  const { data } = await collectionClient("/user/sign_in", {
    body: credentials,
  });
  return data;
}

export async function logoutProfessional() {
  await collectionClient("/user/sign_out", {
    method: "DELETE",
  });

  sessionStorage.removeItem(tokenKey);
}
