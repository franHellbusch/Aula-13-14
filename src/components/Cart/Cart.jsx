import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import "./Cart.css";

function Cart() {
  const { cart } = useCartContext();
  return (
    <div className='CartContainer'>
      {cart.length == 0 ? <h2>No hay productos en el carrito</h2> : <CartList cart={cart} />}
      <div className='CartTotal'>
        <h3>Total</h3>
        <p>
          Total: $
          {cart.reduce((acumulador, item) => acumulador + item.product.price * item.quantity, 0)}
        </p>
        <Link to='/checkout'>Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
