import React, { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import { getCategorias, getProductos } from "./fetcher";
import Category_products from "./components/category_products";

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

  const handleCategoriaClick = (id) => {
    const fetchData = async () => {
      const responseObject = await getProductos(id);
      setProductos(responseObject);
    };
    fetchData();
  };

  const renderCategorias = () => {
    return categorias.data.map((c) => (
      <Category
        key={c.id}
        id={c.id}
        titulo={c.titulo}
        onCategoriaClick={() => handleCategoriaClick(c.id)}
      />
    ));
  };

  const renderProductos = () => {
    return productos.data.map((p) => (
      <Category_products key={p.id} {...p}>{p.titulo} </Category_products>
    ));
  };

  return (
    <>
      <header>My store</header>
      <section>
        <nav>
          {categorias.errorMessage && <div>{categorias.errorMessage}</div>}
          {categorias.data && renderCategorias()}
        </nav>
        <main>
          <h1>Productos</h1>
          {productos.errorMessage && <div>{productos.errorMessage}</div>}
          {productos.data && renderProductos()}
        </main>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
