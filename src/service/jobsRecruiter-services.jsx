import collectionClient from "./collection-client";

export async function getJobsRecruiter() {
  return await collectionClient("/jobs");
}

export async function createJob(data) {
  return await collectionClient("/jobs", {
    body: data,
    method: "POST",
  });
}

export async function updateJob(data, id) {
  return await collectionClient(`/jobs/${id}`, {
    body: data,
    method: "PATCH",
  });
}
