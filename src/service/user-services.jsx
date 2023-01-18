import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createUser(userData) {
  const { data } = await collectionClient("/user", {
    body: userData,
  });
  
  return data;
}

export async function createCompany(recruiterData) {
  const { data } = await collectionClient("/company", {
    body: recruiterData,
  });

  return data;
}

export async function getUser() {
  const data = await collectionClient("/profile");

  return data;
}

export async function updateUser(body) {
  const { data } = await collectionClient("/user", {
    body: body,
    method: "PATCH",
  });

  return data;
}

export async function getJobs() {
  return await collectionClient("/jobs");
}

export async function getRecruiter() {
  const { ...user } = await collectionClient("/profile_company");

  return user;
}

export async function getCompany(id) {
  return await collectionClient(`/profile_company/${id}`);
}

export async function updateRecruiter(body) {
  const { data } = await collectionClient("/company", {
    body: body,
    method: "PATCH",
  });

  return data;
}
