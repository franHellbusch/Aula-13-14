import { useCartContext } from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { FinishPurchase } = useCartContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    const orderId = await FinishPurchase(user);
    console.log(orderId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' type='text' placeholder='Nombre' />
      <input name='lastName' type='text' placeholder='Apellido' />
      <button>Finalizar compra</button>
    </form>
  );
}

export default Checkout;
