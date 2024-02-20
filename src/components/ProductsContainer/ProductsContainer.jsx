import { useState } from "react";
import { products } from "../../data/products";
import { useEffect } from "react";
import "./ProductsContainer.css";

function ProductsContainer() {
  const [productsData, setProductsData] = useState([]);

  const apiCall = () => {
    setTimeout(() => {
      console.log("Se hizo la llada a la api");
      setProductsData(products);
    }, 4000);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      {productsData.length == 0 ? (
        <div className='loader'></div>
      ) : (
        productsData.map((product, index) => <h1 key={index}>{product.title}</h1>)
      )}
    </div>
  );
}

export default ProductsContainer;
