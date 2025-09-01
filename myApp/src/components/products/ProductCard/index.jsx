import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const onAddToCart = () => {};
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.content}>
        <h4 className={styles.title}>{product.title}</h4>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>
          {product.description.length > 100
            ? product.description.substring(0, 97) + "..."
            : product.description}
        </p>
        <div className={styles.categoryTag}>{product.category}</div>
        <div className={styles.rating}>
          Rating: {product.rating?.rate ?? "N/A"}
        </div>
        <button className={styles.addToCartBtn} onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
