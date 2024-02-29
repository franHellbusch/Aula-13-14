import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Saludo from "./components/Saludo/Saludo";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // operadores de condicion

  // ternaria (forma de usar if else)
  const nombre = "Juan";

  const validation = nombre ? true : false;

  // operador AND (solo if)
  const bienvenida = validation && `Bienvenido ${nombre}`;

  // operador OR
  let mensaje = "el nombre no se detecto";
  const filtro = nombre || mensaje;

  // ejemplo con state
  const [mostrarHome, setMostrarHome] = useState(false);

  const handleChange = () => {
    setMostrarHome(!mostrarHome);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductsContainer />} />
        <Route path='/product/:productId' element={<ProductDetailContainer />} />
      </Routes>

      {/* <button onClick={handleChange}>change</button>
      {mostrarHome && <Home/>}
      {mostrarHome ? <Home/> : <h2>Home esta oculto</h2>}
      <Saludo nombre='Juan' apellido='Garcia'/>
      <Saludo nombre='Francisco'/>
      <Saludo nombre='Mateo'/>
      <Saludo nombre='Marta'/> */}
    </BrowserRouter>
  );
}

export default App;
