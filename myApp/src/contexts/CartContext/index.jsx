import { createContext, useCallback, useState } from "react";

export const CartContext = createContext(); // step1 : to create context

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]); // state to pass in child components

  const addToCart = useCallback(
    (productDetails) => {
      setCartItems((currCart) => [...currCart, productDetails]);
    },
    [cartItems]
  );

  const removeFromCart = useCallback(
    (productId) => {
      setCartItems((currCart) =>
        currCart.filter((item) => item.id !== productId)
      );
    },
    [cartItems]
  );

  const isInCart = useCallback(
    (productId) => {
      return Boolean(cartItems.find((i) => i.id === productId));
    },
    [cartItems]
  );

  const cartLength = cartItems.length;
  return (
    <CartContext
      value={{
        //these variables inside value, will be accesible using useContext in child components
        addToCart,
        removeFromCart,
        isInCart,
        cartLength,
        cartItems,
      }}
    >
      {/* wrap sub tree of children to access cart values */}
      {props.children}
    </CartContext>
  );
};
export default CartProvider;
