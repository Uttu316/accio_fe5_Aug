import { useNavigate } from "react-router";
import styles from "./productCard.module.css";
import Card from "../../card";
import { useContext, useMemo } from "react";
import { CartContext } from "../../../contexts/cartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartLength, removeFromCart, isInCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const onAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  const onRemoveCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(product.id);
  };

  const onCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const inCart = useMemo(() => isInCart(product.id), [product.id, cartLength]);

  return (
    <Card onCardClick={onCardClick}>
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
        {!inCart && (
          <button className={styles.addToCartBtn} onClick={onAddToCart}>
            Add to Cart
          </button>
        )}
        {inCart && (
          <button className={styles.removefromCartBtn} onClick={onRemoveCart}>
            Remove from Cart
          </button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
