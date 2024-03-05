import { useEffect } from "react";
import "./ProductsContainer.css";
import ProductsList from "../ProductsList/ProductsList";
import axios from "axios";
import { useProductsContext } from "../../context/ProductsContext";

function ProductsContainer() {
  const { products, getProducts } = useProductsContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='productsContainer'>
      <ProductsList products={products} />
    </div>
  );
}

export default ProductsContainer;
