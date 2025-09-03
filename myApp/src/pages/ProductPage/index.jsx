import PageHeader from "../../components/pageHeader";
import styles from "./productPage.module.css";
import productImage from "../../assets/hero.svg";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { getProduct } from "../../services/getProduct";

const ProductPage = () => {
  const { productId } = useParams();

  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  const loadProduct = useCallback(async () => {
    try {
      const data = await getProduct(productId);
      setProduct(data);
      setStatus("done");
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      loadProduct();
    }
  }, [productId]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  return (
    <div>
      <PageHeader />

      {isLoading && (
        <h2 className={styles.loading}>Loading product for you...</h2>
      )}
      {noProduct && (
        <h2 className={styles.noProduct}>Product is not available</h2>
      )}
      {isError && <h2 className={styles.error}>Something Went Wrong</h2>}
      {hasProduct && (
        <div className={styles.productContainer}>
          <div className={styles.productContent}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productCategory}>
              <strong>Category:</strong> {product.category}
            </p>
            <p className={styles.productPrice}>
              <strong>Price:</strong> ${product.price}
            </p>
            <p className={styles.productRating}>
              <strong>Rating:</strong>
              {product.rating.rate} stars
            </p>
            <p className={styles.productReviews}>
              <strong>Reviews:</strong> {product.rating.count} reviews
            </p>
          </div>
          <div className={styles.productImageContainer}>
            <img
              src={product.image}
              alt="Product"
              className={styles.productImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
