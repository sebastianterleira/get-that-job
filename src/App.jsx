import { useAuth } from "./context/auth-context";
import { useEffect, useState, Suspense, lazy } from "react";
import Loading from "./components/Loading/loading";
const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

function App() {
  const { user, recruiter } = useAuth();

  return (
    <>
      <Suspense fallback={<Loading />}>
        {user || recruiter ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </>
  );
}

export default App;
