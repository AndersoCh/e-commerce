import React from "react";
import { Outlet, Link } from "react-router-dom";
import { HomeIcon, CartIcon } from "./icons";
import Search from "./search";

const Layout = ({ categorias }) => {
  const renderCategorias = () => {
    return categorias.data.map((c) => (
      <li key={c.id}>
        <Link to={`/categorias/${c.id}`}>{c.titulo}</Link>
      </li>
    ));
  };

  return (
    <>
      <header>
        <div>
          <Link to="/home">
            <HomeIcon width={40} />
          </Link>
        </div>
        <Search/>
        <div id="headerTitle">Nuestra Tienda</div>
        <div id="headerCartIcon">
          <Link to="/basket">
            <CartIcon width={40} />
          </Link>
        </div>
      </header>
      <section>
        <nav>
          {categorias.errorMessage && <div>{categorias.errorMessage}</div>}
          <ul>{categorias.data && renderCategorias()}</ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>
      <footer>
        <Link to="/Home">Home</Link>| <Link to="/basket">Basket</Link>
      </footer>
    </>
  );
};

export default Layout;
