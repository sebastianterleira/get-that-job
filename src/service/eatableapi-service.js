import collectionClient from "./collection-client";

export async function getProducts() {
    const { ...data } = await collectionClient("/products");
    
    return data;
  }
