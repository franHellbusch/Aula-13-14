import "./App.css";
import Header from "./components/Header/Header";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./context/ProductsContext";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<ProductsContainer />} />
            <Route path='/category/:category' element={<ProductsContainer />} />
            <Route path='/product/:productId' element={<ProductDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
