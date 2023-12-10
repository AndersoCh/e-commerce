import React, { useState } from "react";
import "./App.css";
import { getCategorias } from "./fetcher";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket";
import CheckOut from "./components/ChecktOut";
import Category from "./components/Category";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [categorias, setCategorias] = useState({ errorMessage: "", data: [] });
  const [productos, setProductos] = useState({ errorMessage: "", data: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategorias();
      setCategorias(responseObject);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categorias={categorias} />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} /> 
            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="productos/:productId" element={<ProductDetails />} />
            <Route path="categorias/:categoriaId" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
