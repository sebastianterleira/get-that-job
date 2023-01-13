import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getJobs, getUser, getRecruiter } from "../service/user-services";
import {
  createUser,
  getJobs,
  getUser,
  getRecruiter,
  updateRecruiter,
} from "../service/user-services";
import * as auth from "../service/auth-services";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [recruiter, setRecruiter] = useState(null);
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  useEffect(() => {
    getJobs().then(setJobs).catch(console.log);
  }, []);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  const navigate = useNavigate();
  
  // useEffect(() => {
  //   getUser().then(setUser).catch(console.log);
  // }, []);

  useEffect(() => {
    getRecruiter().then(setRecruiter).catch(console.log);
  }, []);

  function loginProfessional(credentials) {
    auth.loginProfessional(credentials).then(setUser).catch(console.log);
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

  function logoutProfessional() {
    auth.logoutRecruiter().then(() => setRecruiter(null));
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function updateRecruiterProfile(data) {
    updateRecruiter(data).then(setRecruiter).catch(console.log);
  }

  const value = {
    user,
    jobs,
    recruiter,
    setUser,
    logout,
    signup,
    lgoinRecruiter,
    loginProfessional,
    navigate,
    logoutRecruiter,
    logoutProfessional,
    setJobs,
    updateRecruiterProfile,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
