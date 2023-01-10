import { Route, Routes } from "react-router-dom";
import Search from "./pages/search";

function AuthenticatedApp() {
  return (
		<>
		<Routes>
			<Route 
			path={"/home"}
			element={<Search />}
			/>
		</Routes>
		</>
	);
}

export default AuthenticatedApp;