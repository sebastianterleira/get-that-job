import collectionClient from "./collection-client";

export async function createApplicationJob(data) {
  return await collectionClient("/applications_jobs", {
    body: data,
    method: "POST",
  });
}

export async function updateApplicationJob(data, id) {
  return await collectionClient(`/applications_jobs/${id}`, {
    body: data,
    method: "PATCH",
  });
}
