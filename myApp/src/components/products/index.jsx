import { useCallback, useEffect, useState } from "react";
import styles from "./products.module.css";
import { getProducts } from "../../services/getProducts";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Products = () => {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [count, setCount] = useState(0);

  const loadProducts = useCallback(async function () {
    try {
      const data = await getProducts();
      setProducts(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, []);

  const isLoading = status === "loading";
  const isSuccess = status === "done";
  const isError = status === "error";

  return (
    <section className={styles.productsContainer}>
      <h2 className={styles.productsHeading}>Latest Products</h2>
      {isLoading && (
        <h3 className={styles.productsLoading}>Loading Products...</h3>
      )}
      {isError && (
        <h3 className={styles.productsError}>Something went wrong</h3>
      )}
      <button onClick={() => setCount(count + 1)}>Update count-{count}</button>
      {isSuccess && (
        <div className={styles.productsWrapper}>
          <Filter currCategory={filter} setFilter={setFilter} />
          <ProductList products={products} currCategory={filter} />
        </div>
      )}
    </section>
  );
};

export default Products;
