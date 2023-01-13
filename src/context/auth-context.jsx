import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser } from "../service/user-services";
import * as auth from "../service/auth-services";
import React from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [recruiter, setRecruiter] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  // useEffect(() => {
  //   getUser().then(setUser).catch(console.log);
  // }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function lgoinRecruiter(credentials) {
    auth.loginRecruiter(credentials).then(setRecruiter).catch(console.log);
  }

  function logout() {
    auth.logoutProfessional().then(() => setUser(null));
  }

  function logoutRecruiter() {
    auth.logoutRecruiter().then(() => setRecruiter(null));
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  const value = {
    user,
    setUser,
    login,
    logout,
    signup,
    lgoinRecruiter,
    recruiter,
    logoutRecruiter,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
