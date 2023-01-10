import { useState } from "react";
import LoginForm from "./componente/login-form";
import SignupForm from "./componente/signup-form";
import "./componente/loginform.css";

function UnauthenticatedApp(onLogin, onSignup) {
  const [showlogin, setShowlogin] = useState(true);

  function handleLinkChange(event) {
    event.preventDefault();
    setShowlogin(!showlogin);
  }

  return (
    <div>
      <h1 className="h1">Welcome back</h1>
      <p className="p">Login to you account as...</p>

      <button>PROFESSIONAL</button>
      <button>RECRUITER</button>

      {showlogin ? <LoginForm onLogin /> : <SignupForm onSignup />}
    </div>
  );
}

export default UnauthenticatedApp;
