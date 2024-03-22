import { useEffect } from "react";
import "./ProductsContainer.css";
import ProductsList from "../ProductsList/ProductsList";
import axios from "axios";
import { useProductsContext } from "../../context/ProductsContext";
import { useParams } from "react-router-dom";

function ProductsContainer() {
  const { products, getProducts } = useProductsContext();

  const { category } = useParams();

  useEffect(() => {
    getProducts(category);
  }, [category]);

  return (
    <div className='productsContainer'>
      <ProductsList products={products} />
    </div>
  );
}

export default ProductsContainer;
