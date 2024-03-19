import { useCartContext } from "../../context/CartContext";
import "./CartList.css";
import CloseIcon from "@mui/icons-material/Close";

function CartList({ cart }) {
  const { deleteProductFromCart, deleteAllFromCart, changeQuantityToProduct } = useCartContext();

  return (
    <div className='CartListContainer'>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div className='cartProduct' key={item.product.id}>
          <button
            onClick={() => deleteProductFromCart(item.product.id)}
            className='cartDeleteProduct'>
            <CloseIcon />
          </button>
          <img src={item.product.image} alt={item.product.title} />
          <h3>{item.product.title}</h3>
          <div className='cartProductCounter'>
            <button
              onClick={() =>
                item.quantity > 1 && changeQuantityToProduct(item.product.id, item.quantity - 1)
              }>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => changeQuantityToProduct(item.product.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <span>${item.product.price}</span>
        </div>
      ))}
      <div className='deleteAllFormCartContainer'>
        <button onClick={deleteAllFromCart}>Delete All</button>
      </div>
    </div>
  );
}

export default CartList;
