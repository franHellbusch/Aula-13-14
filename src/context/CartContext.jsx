import { addDoc, collection } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";

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

  const FinishPurchase = async (user) => {
    const order = {
      user,
      cart,
      total: cart.reduce((acumulador, item) => acumulador + item.product.price * item.quantity, 0),
    };

    const reference = collection(db, "orders");

    const docRef = await addDoc(reference, order);

    deleteAllFromCart();

    return docRef.id;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        deleteProductFromCart,
        deleteAllFromCart,
        changeQuantityToProduct,
        FinishPurchase,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
