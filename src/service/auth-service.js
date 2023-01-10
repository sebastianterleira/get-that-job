//login
import { tokenKey } from "../config";
import collectionClient from "./collection-client";
//crear conexiones a la api

export async function login(crediantials) {
    const { token, ...user } = await collectionClient("/login", {
        body: crediantials,
    });

    sessionStorage.setItem(tokenKey, token);
    return user;
}

export async function signUp(crediantials) {
    const { token, ...user } = await collectionClient("/users", {
        body: crediantials,
    });

    sessionStorage.setItem(tokenKey, token);
    return user;
}