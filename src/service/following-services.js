import collectionClient from "./collection-client";

export async function createFollowing(id, type) {
  const { data } = await collectionClient(`/${type}/${id}/followings`, {
    method: "POST",
  });
  return data;
}

export async function deleteFollowing(id, type, follow_id) {
  console.log(follow_id);

  await collectionClient(`/${type}/${id}/followings/${follow_id}`, {
    method: "DELETE",
  });
}
