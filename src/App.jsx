import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import { useEffect, useState } from "react";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";

import { useAuth } from "./context/auth-context";

function App() {
  const { user, recruiter } = useAuth();

  return (
    <>
      { user ? <AuthenticatedApp/> : <UnauthenticatedApp /> }
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;
