import { useState } from "react";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

import { ProductList } from "../components/ProductList";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const WishList = () => {
  const [products, setProducts] = useState(getFromLocalStorage("wishList"));

  const handleRemove = (products) => {
    setProducts(products);
  };

  return (
    <Stack spacing={3}>
      {products.length === 0 ? (
        <Alert severity="info">You have no items in your wish list.</Alert>
      ) : (
        <ProductList
          products={products}
          mode="wishList"
          handleRemove={handleRemove}
        />
      )}
    </Stack>
  );
};
