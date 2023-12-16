const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const CartReducer = (state, action) => {
  let index = -1;
  if (action.payload)
    index = state.cartItems.findIndex((x) => x.id === action.payload.id);

  switch (action.type) {
    case "ADD":
    case "INCQTY":
      if (index === -1) {
        const newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
        Storage(newCartItems);
        return {
          ...state,
          cartItems: newCartItems,
        };
      } else {
        const newCartItems = state.cartItems.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        );
        Storage(newCartItems);
        return { ...state, cartItems: newCartItems };
      }

    case "REMOVE":
      if (index > -1) {
        const newCartItems = state.cartItems.filter((_, i) => i !== index);
        Storage(newCartItems);
        return { ...state, cartItems: newCartItems };
      }
      break;

    case "DECQTY":
      if (index > -1) {
        const newCartItems = state.cartItems.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        );
        Storage(newCartItems);
        return { ...state, cartItems: newCartItems };
      }
      break;

    case "CLEAR":
      Storage([]);
      return { ...state, cartItems: [] };

    default:
      // No action taken, return the current state
      return state;
  }
};
