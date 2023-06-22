import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, mode, handleRemove }) => {
  return (
    <Stack>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Results
      </Typography>
      <Divider />
      <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.ASIN}
            mode={mode}
            handleRemove={handleRemove}
          />
        ))}
      </Stack>
    </Stack>
  );
};
