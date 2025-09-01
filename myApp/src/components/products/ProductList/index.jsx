import { useMemo } from "react";
import ProductCard from "../ProductCard";
import styles from "./productList.module.css";

const ProductList = ({ products, currCategory }) => {
  // show all product if all selected else filter based on category
  const productsToshow = useMemo(() => {
    //O(n)
    console.log("Filtering caluclation");
    return currCategory === "all"
      ? products
      : products.filter((i) => i.category === currCategory);
  }, [products, currCategory]);

  const isEmpty = productsToshow.length === 0; //O(1)

  return (
    <div className={styles.productList}>
      {isEmpty && <h2 className={styles.noProduct}>No product available</h2>}
      {!isEmpty &&
        productsToshow.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
