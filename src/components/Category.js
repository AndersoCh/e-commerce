import React from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../fetcher";
import CategoryProducts from './CategoryProducts';

const Category = ({ id, titulo, onCategoriaClick }) => {
  const { categoriaId } = useParams();
  const [productos, setProduct] = React.useState({ errorMessage: "", data: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductos(categoriaId);
      setProduct(responseObject);
    };
    fetchData();
  }, [categoriaId]);

  const renderProductos = () => {
    return productos.data.map((p) => (
      <CategoryProducts key={p.id} {...p}>
        {p.titulo}{" "}
      </CategoryProducts>
    ));
  };

  return (
    <div>
      {productos.errorMessage && <div>{productos.errorMessage}</div>}
      {productos.data && renderProductos()}
    </div>
  );
};

export default Category;
