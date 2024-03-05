import { useEffect, useState } from "react";
import "./ProductDetailContainer.css";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContext";

function ProductDetailContainer() {
  const { getProductById } = useProductsContext();
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const setProductById = async () => {
    setProduct(await getProductById(productId));
  };

  useEffect(() => {
    setProductById();
  }, []);

  return (
    <div className='productDetailContainer'>
      {!product ? <div className='productDetailLoader'></div> : <ProductDetail product={product} />}
    </div>
  );
}

export default ProductDetailContainer;
