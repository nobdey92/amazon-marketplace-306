import { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import { SearchForm } from "../components/SearchForm";
import { ProductList } from "../components/ProductList";
import productsFromJSON from "../mocks/products.json";

export const Home = () => {
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSubmit = (searchTerm) => {
    setKeywords(searchTerm);
  };

  useEffect(() => {
    if (keywords) {
      const fetchData = async () => {
        try {
          setError(false);
          setIsLoading(true);

          // const { data } = await axios.get(
          //   "https://amazon-price1.p.rapidapi.com/search",
          //   {
          //     params: {
          //       keywords,
          //       marketplace: "GB",
          //     },
          //     headers: {
          //       "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
          //       "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
          //     },
          //   }
          // );

          const data = await new Promise((resolve) => {
            setTimeout(() => resolve(productsFromJSON), 1000);
          });

          setIsLoading(false);

          if (data.length === undefined) {
            throw new Error();
          } else {
            setProducts(data);
          }
        } catch {
          setProducts([]);
          setIsLoading(false);
          setError(true);
        }
      };

      fetchData();
    }
  }, [keywords]);

  return (
    <Stack spacing={3}>
      <SearchForm handleSubmit={handleSubmit} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {error && (
        <Alert severity="error">Something went wrong. Please try again.</Alert>
      )}
      {products.length !== 0 && <ProductList products={products} />}
    </Stack>
  );
};
