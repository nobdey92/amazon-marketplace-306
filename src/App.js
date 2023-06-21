import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <Stack spacing={3}>
        <NavBar />
        <Container maxWidth="lg">
          <AppRoutes />
        </Container>
      </Stack>
    </BrowserRouter>
  );
};
