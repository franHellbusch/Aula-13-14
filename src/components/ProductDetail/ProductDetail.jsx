import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./ProductDetail.css";
import { Link } from "react-router-dom";

function ProductDetail({ product }) {
  const { addProductToCart } = useCartContext();
  const [count, setCount] = useState(1);
  const [productAdd, setProductAdd] = useState(false);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    count > 1 && setCount(count - 1);
  };

  const sendToCart = () => {
    addProductToCart(product, count);
    setProductAdd(true);
  };

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      {!productAdd ? (
        <>
          <div className='productDetailCounter'>
            <button onClick={removeCount}>-</button>
            <span>{count}</span>
            <button onClick={addCount}>+</button>
          </div>
          <button onClick={sendToCart} className='addToCartButton'>
            Add To Cart
          </button>
        </>
      ) : (
        <Link to='/cart'>Go Cart</Link>
      )}
    </div>
  );
}

export default ProductDetail;
