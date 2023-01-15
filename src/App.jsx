import { useAuth } from "./context/auth-context";
import { useEffect, useState, Suspense, lazy } from "react";
import Loading from "./components/Loading/loading";
const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

function App() {
  const { user, recruiter } = useAuth();
  const [showView, setShowVIew] = useState(true);

  setTimeout(() => {
    setShowVIew(false);
  }, 5000);

  if (showView) {
    return <Loading />;
  } else {
    return (
      <>{user || recruiter ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
    );
  }
}

export default App;
