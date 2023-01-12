import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getRecruiter } from "../service/user-services";
import * as auth from "../service/auth-services";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [recruiter, setRecruiter] = useState(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   getUser().then(setUser).catch(console.log);
  // }, []);

  useEffect(() => {
    getRecruiter().then(setRecruiter).catch(console.log);
  }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function lgoinRecruiter(credentials) {
    auth.loginRecruiter(credentials).then(setRecruiter).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => setUser(null));
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
    navigate,
    logoutRecruiter,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
