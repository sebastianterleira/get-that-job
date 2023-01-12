import { useEffect, useState } from "react";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";

import { useAuth } from "./context/auth-context";

function App() {
  const { user, recruiter } = useAuth();

  return (
    <>
      { user ? <AuthenticatedApp/> : <UnauthenticatedApp /> }
    </>
  );
}

export default App;
