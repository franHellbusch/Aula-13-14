import { useEffect, useState } from "react";
import "./ProductDetailContainer.css";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";

function ProductDetailContainer() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const getProductById = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className='productDetailContainer'>
      {!product ? <div className='productDetailLoader'></div> : <ProductDetail product={product} />}
    </div>
  );
}

export default ProductDetailContainer;
