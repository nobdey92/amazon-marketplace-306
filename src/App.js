import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";
import { AppProvider } from "./context/AppProvider";

export const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Stack spacing={3}>
          <NavBar />
          <Container maxWidth="lg">
            <AppRoutes />
          </Container>
        </Stack>
      </AppProvider>
    </BrowserRouter>
  );
};
