import React from "react";
import { getProductosByQuery } from "../fetcher";
import { useParams, useSearchParams } from "react-router-dom";
import CategoryProducts from "./CategoryProducts";

const SearchResults = () => {
  const [productos, setProductos] = React.useState({
    erroMessage: "",
    data: [],
  });
  const [searchParams] = useSearchParams();
  const query = searchParams.get("s");

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductosByQuery(query);
      setProductos(responseObject);
    };
    fetchData();
  }, [query]);

  const renderProductos = () => {
    if (productos.data.length > 0) {
      return productos.data.map((p) => (
        <CategoryProducts key={p.id} {...p}>
          {p.titulo}
        </CategoryProducts>
      ));
    }else {
       return  <div>No se encontraron resultados</div>
    }
  };
  return (
    <div>
      {productos.errorMessage && <div>Error: {productos.erroMessage}</div>}
      { renderProductos()}
    </div>
  );
};

export default SearchResults;
