import { useState } from "react";
import { useEffect } from "react";
import "./ProductsContainer.css";
import ProductsList from "../ProductsList/ProductsList";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductsContainer() {
  const [productsData, setProductsData] = useState([]);

  const getProducts = async () => {
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
    getProducts();
  }, []);

  return (
    <div className='productsContainer'>
      <ProductsList products={productsData} />
    </div>
  );
}

export default ProductsContainer;
