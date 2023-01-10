import { useEffect, useState } from "react";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { login } from "./service/auth-services";
import { createUser } from "./service/user-services";


function App() {
  const [user, setUser] = useState(null);

  console.log(user);

  function handlelogin(credentials) {
    login(credentials).then(setUser).catch(console.log);
  }

  function handleSignup(credentials) {
    createUser(credentials).then(setUser).catch(console.log);
  }
  
  return (
    <>
      { user ? <AuthenticatedApp/> : <UnauthenticatedApp onLogin={handlelogin} onSignup={handleSignup}/> }
    </>
  );
}

export default App;