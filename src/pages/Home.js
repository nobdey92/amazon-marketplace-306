import { SearchForm } from "../components/SearchForm";
import { ProductList } from "../components/ProductList";
import products from "../mocks/products.json";

export const Home = () => {
  return (
    <div>
      <SearchForm />
      <ProductList products={products} />
    </div>
  );
};
