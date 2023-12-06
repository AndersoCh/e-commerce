import React from "react";

const Category_products = ({
  titulo,
  imagen,
  specs,
  features,
  price,
  stock,
}) => {
  return (
    <article>
      <div className="category-product-title">{titulo}</div>
      <figure>
        <div className="category-products-image-container">
          <img src={`./assets/${imagen}`} alt={titulo} />
        </div>
      </figure>
      <aside>
        <div className="category-product-info-dimensions">
          <h3>Dimensiones</h3>
          <label>{specs.dimensions}</label>
        </div>
        {specs.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacidad</h3>
            <label>{specs.capacity}</label>
          </div>
        )}

        <div className="category-product-info-features">
          <h3>Características</h3>
          <ul>
            {features?.map((f,i) => {
              return <li key={`featur${i}`}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>
      <aside className="category-product-finance">
        <div className="category-product-finance-price">
            &pound;{price}
        </div>
        
        <div className="category-product-info-stock">
          <label>Stock Level:{stock}</label>
          <label>Free delivery:{stock}</label>
        </div>

        <div className='category-product-action'>
          <button>Ver producto</button>
          <button>Agregar al Carrito</button>

        </div>
      </aside>
    </article>
  );
};

export default Category_products;
