import axios from "axios";
import { createContext, useContext, useState } from "react";

// Creacion del context
export const ProductsContext = createContext();

// Funcionalidad para usar el contexto mas facilmente
export const useProductsContext = () => useContext(ProductsContext);

// Crear Provider (Provee al resto de nuestra aplicacion)
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProductById = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  };

  return (
    <ProductsContext.Provider value={{ products, getProducts, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
