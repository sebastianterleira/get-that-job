import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser } from "../service/user-services";
import * as auth from "../service/auth-services";

const AuthContext = createContext();


function AuthProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);
  
  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => setUser(null));
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

	console.log(user)

  const value = {
    user,
    setUser,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };