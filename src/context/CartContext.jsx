import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Filtrar items con cantidad cero
    });
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        totalPrice,
        totalQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
