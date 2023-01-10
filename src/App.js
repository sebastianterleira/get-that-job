import { useEffect, useState } from "react";

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { getUser } from "./service/user-service";
import { login, signUp } from "./service/auth-service";
import SignupForm from "./componente/signup-form";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  console.log(user);

  function handlelogin(credentials) {
    login(credentials).then(setUser).catch(console.log);
  }

  function handleSignup(credentials) {
    signUp(credentials).then(setUser).catch(console.log);
  }
  
  return (user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp onLogin={handlelogin} onSignup={handleSignup}/>
  ));

  
}

export default App;




// import Loginform from './components/loginform';


// function App() {
//   return (
//     <div>
//      <Loginform />
//     </div>
//   );
// }

// export default App;
