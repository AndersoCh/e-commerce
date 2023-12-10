import React from "react";
import { useParams } from "react-router-dom";
import { getProductosById } from "../fetcher";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductDetails = () => {
  const [product, setProduct] = React.useState({ errorMessage: "", data: [] });
  const params = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductosById(params.productId);
      setProduct(responseObject);
    };
    fetchData();
  }, [params.productId]);

  const  createMarkup =()=>{
    return {
      __html : product.data?.descripcion
    }
  }
  return (
    <article>
      <ProductTitle>{product.data.titulo}</ProductTitle>
      <figure>
        <ProductImageContainer>
          <ProductImageContainerImage
            src={`/assets/${product.data.imagen}`}
            alt={product.data.titulo}
          />
        </ProductImageContainer>
      </figure>
      <aside>
        <ProductInfo>
          <h3>Dimensiones</h3>
          <label>{product.data.specs?.dimensions}</label>
        </ProductInfo>
        {product.data.specs?.capacity && (
          <ProductInfo>
            <h3>Capacidad</h3>
            <label>{product.data.specs?.capacity}</label>
          </ProductInfo>
        )}

        <div className="category-product-info-features">
          <h3>Características</h3>
          <ul>
            {product.data.features?.map((f, i) => {
              return <li key={`features${i}`}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>
      <aside className="category-product-finance">
        <div className="category-product-finance-price">
          &pound;{product.data.price}
        </div>

        <div className="category-product-info-stock">
          <label>Stock Level:{product.data.stock}</label>
          <label>Free delivery:{product.data.stock}</label>
        </div>

        <div className="category-product-action">
          <button>Agregar al Carrito</button>
        </div>
      </aside>

      <ProductDescription dangerouslySetInnerHTML={createMarkup()}></ProductDescription>
    </article>
  );
};

export default ProductDetails;

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
