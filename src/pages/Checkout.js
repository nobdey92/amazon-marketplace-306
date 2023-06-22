import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { useApp } from "../hooks/useApp";
import { Basket } from "../components/Basket";

export const Checkout = () => {
  const { state } = useApp();

  return (
    <Stack spacing={3}>
      {state.basket.length === 0 ? (
        <Alert severity="info">You have no items in your basket.</Alert>
      ) : (
        <Basket />
      )}
    </Stack>
  );
};
