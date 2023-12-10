import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryProducts = ({
  id,
  titulo,
  imagen,
  specs,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();

  return (
    <article>
      <ProductTitle>
        <Link to={`productos/${id}`}>{titulo}</Link>
      </ProductTitle>
      <figure>
        <ProductImageContainer>
          <ProductImageContainerImage src={`/assets/${imagen}`} alt={titulo} />
        </ProductImageContainer>
      </figure>
      <aside>
        <ProductInfo>
          <h3>Dimensiones</h3>
          <label>{specs.dimensions}</label>
        </ProductInfo>
        {specs.capacity && (
          <ProductInfo>
            <h3>Capacidad</h3>
            <label>{specs.capacity}</label>
          </ProductInfo>
        )}

        <ProductInfo>
          <h3>Características</h3>
          <ul>
            {features?.map((f, i) => {
              return <li key={`feature${i}`}>{f}</li>;
            })}
          </ul>
        </ProductInfo>
      </aside>
      <aside className="category-product-finance">
        <div className="category-product-finance-price">&pound;{price}</div>

        <div className="category-product-info-stock">
          <label>Stock Level:{stock}</label>
          <label>Free delivery:{stock}</label>
        </div>

        <div className="category-product-action">
          <button onClick={() => navigate(`/productos/${id}`)}>
            Ver producto
          </button>
          <button>Agregar al Carrito</button>
        </div>
      </aside>
    </article>
  );
};

export default CategoryProducts;

const ProductDescription = styled.div`
  grid-column: 1 / span 3;
`;

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
