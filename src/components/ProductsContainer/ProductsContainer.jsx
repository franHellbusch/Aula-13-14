import { useState } from "react";
import { useEffect } from "react";
import "./ProductsContainer.css";
import ProductsList from "../ProductsList/ProductsList";
import axios from "axios";

function ProductsContainer() {
  const [productsData, setProductsData] = useState([]);

  const apiCall = async () => {
    // async await
    try {
      // fetch
      // const response = await fetch("https://fakestoreapi.com/products");
      // const data = await response.json();

      // axios
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductsData(response.data);
    } catch (error) {
      console.error(error);
    }

    // .then y .catch
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProductsData(data))
    //   .catch((err) => console.error(err));
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className='productsContainer'>
      <ProductsList products={productsData} />
    </div>
  );
}

export default ProductsContainer;
