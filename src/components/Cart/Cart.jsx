import { useCartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import "./Cart.css";

function Cart() {
  const { cart } = useCartContext();
  return (
    <div className='CartContainer'>
      {cart.length == 0 ? <h2>No hay productos en el carrito</h2> : <CartList cart={cart} />}
    </div>
  );
}

export default Cart;
