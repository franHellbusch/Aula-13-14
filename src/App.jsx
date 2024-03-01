import "./App.css";
import Header from "./components/Header/Header";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductsContainer />} />
        <Route path='/product/:productId' element={<ProductDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
