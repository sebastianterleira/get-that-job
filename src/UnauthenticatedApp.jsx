import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";

function UnauthenticatedApp() {
  return (
		<>
		<Header/>
			<Routes>
					<Route
					path={"/"}
					element={<Home/>}
					/>
					<Route
					path={"login"}
					element={<LoginPage/>}
					/>
					<Route
					path={"signup"}
					element={<SignUpPage/>}
					/>
			</Routes>
		</>
	);
}

export default UnauthenticatedApp;
