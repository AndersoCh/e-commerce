import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ChecktOut = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    shippingAddress1: "",
    touched: {
      name: false,
      email: false,
      shippingAddress1: false,
    },
  });
  const navigate = useNavigate();

  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    shippingAddress1: form.shippingAddress1.length === 0,
  };
  const disabled = Object.keys(errors).some((x) => errors[x]);
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (ev) => {
    if (disabled) {
      ev.preventDefault();
      return;
    }
    navigate("/orderconfirmation");
  };

  const handleBur = (ev) => {
    const { name, value } = ev.target;
    setForm((prevState) => {
      return { ...prevState, touched: { ...form.touched, [name]: true } };
    });
  };

  const showError = (field) => (errors[field] ? form.touched[field] : false);

  return (
    <form onSubmit={handleSubmit}>
      <CheckoutContainer>
        <CheckoutHeader>Tus detalles</CheckoutHeader>
        <CheckoutHeaderLine />

        <CheckoutTable>
          <CheckoutFormLabel>Nombre *</CheckoutFormLabel>
          <CheckOutFormInput
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Ingrese Nombre"
            invalid={showError("name")}
            onBlur={handleBur}
          />

          <CheckoutFormLabel>Correo Electrónico *</CheckoutFormLabel>
          <CheckOutFormInput
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Ingrese Correo"
            invalid={showError("email")}
            onBlur={handleBur}
          />
        </CheckoutTable>
        <CheckoutHeader>
          <h4>Detalles Dirección</h4>
        </CheckoutHeader>
        <CheckoutHeaderLine />
        <CheckoutTable>
          <CheckoutFormLabel>Copia a comprar</CheckoutFormLabel>
          <CheckoutFormCheckbox type="checkbox" />
          <CheckoutFormLabel>Dirección de Envio</CheckoutFormLabel>
          <CheckoutAddress>
            <input type="text" name="billing-address1" />
            <input type="text" name="billing-address2" />
            <input type="text" name="billing-city" />
          </CheckoutAddress>
          <CheckoutFormLabel>Dirección de Envio *</CheckoutFormLabel>
          <CheckoutAddress>
            <CheckOutFormInput
              type="text"
              name="shippingAddress1"
              onChange={handleChange}
              placeholder="Ingrese Dirección de Envío"
              invalid={showError("shippingAddress1")}
              onBlur={handleBur}
            />
            <input type="text" name="shippingAddress2" />
            <input type="text" name="shippinhCity" />
          </CheckoutAddress>
        </CheckoutTable>

        <CancelButton onClick={() => navigate("/basket")}>
          Cancelar
        </CancelButton>
        <CheckoutButton disabled={disabled}>Confirmar Orden</CheckoutButton>
      </CheckoutContainer>
    </form>
  );
};

export default ChecktOut;

const CheckoutContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const CheckoutTable = styled.div`
  grid-column: 1 / span 3;

  display: grid;
  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const CheckoutHeader = styled.div`
  grid-column: 1 / span 3;
  padding-top: 20px;
`;
const CheckoutHeaderLine = styled.hr`
  grid-column: 1 / span 3;
  margin-bottom: 20px;
  border: 1px solid gray;
`;
const CheckoutTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`;

const CheckoutAddress = styled.div`
  display: grid;

  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

const CheckoutFormLabel = styled.label`
  justify-self: end;
`;

const CheckoutInput = styled.input`
  border-width: 1px;
  border-style: solid;

  ${(props) =>
    props.invalid &&
    `
        border-color: red;
        border-width: 3px;
    `}
`;

const CheckOutFormInput = styled.input`
  ${(props) =>
    props.invalid &&
    `
  border-width:3px;
  border-color: red;
`};
  bordcer-style: solid;
`;

const CheckoutFormCheckbox = styled.input`
  grid-column: 2 / span 3;
  justify-self: start;
  margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 3;
`;

const CancelButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 1;
`;
