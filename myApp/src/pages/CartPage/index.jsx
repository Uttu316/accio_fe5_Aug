import { useContext, useMemo } from "react";
import PageContainer from "../../components/pageContainer";
import { CartContext } from "../../contexts/cartContext";
import styles from "./cartPage.module.css";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>
          {item.description.length > 100
            ? item.description.substring(0, 97) + "..."
            : item.description}
        </p>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
        <button className={styles.removeBtn} onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { cartLength, cartItems, removeFromCart } = useContext(CartContext);

  const isEmpty = cartLength === 0;
  const totalAmount = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price, 0),
    [cartLength]
  );
  return (
    <PageContainer>
      <div className={styles.cartList}>
        {isEmpty && <p className={styles.emptyMessage}>Your cart is empty.</p>}
        {!isEmpty &&
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        {!isEmpty && (
          <div className={styles.payContainer}>
            <button className={styles.payBtn}>Pay ${totalAmount}</button>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default CartPage;
