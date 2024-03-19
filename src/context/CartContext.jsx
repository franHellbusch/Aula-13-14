import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product, quantity) => {
    // Sumarle la cantidad recida al producto recibido en caso de que este ya en el carrito
    if (cart.some((item) => item.product.id == product.id)) {
      const cartCharged = cart.map((item) => {
        if (item.product.id == product.id) {
          item.quantity += quantity;
        }
        return item;
      });

      return setCart(cartCharged);
    }

    // Agregar el item completo al carrito, ya que no existe producto con su id dentro
    setCart([
      ...cart,
      {
        quantity,
        product,
      },
    ]);
  };

  const deleteProductFromCart = (id) => {
    setCart(cart.filter((item) => item.product.id != id));
  };

  const deleteAllFromCart = () => {
    setCart([]);
  };

  const changeQuantityToProduct = (id, quantity) => {
    setCart(
      cart.map((item) => {
        if (item.product.id == id) {
          item.quantity = quantity;
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        deleteProductFromCart,
        deleteAllFromCart,
        changeQuantityToProduct,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
