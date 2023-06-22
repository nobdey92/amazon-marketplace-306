import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

import { useApp } from "../hooks/useApp";
import { ProductList } from "../components/ProductList";

export const WishList = () => {
  const { state } = useApp();

  return (
    <Stack spacing={3}>
      {state.wishList.length === 0 ? (
        <Alert severity="info">You have no items in your wish list.</Alert>
      ) : (
        <ProductList products={state.wishList} mode="wishList" />
      )}
    </Stack>
  );
};
