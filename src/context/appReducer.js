export const appReducer = (state, action) => {
  if (action.type === "ADD_WISH_LIST_ITEM") {
    const itemExists = state.wishList.find((item) => {
      return item.ASIN === action.payload.ASIN;
    });

    if (!itemExists) {
      const wishList = [action.payload, ...state.wishList];

      localStorage.setItem("wishList", JSON.stringify(wishList));

      return {
        ...state,
        wishList,
      };
    }
  }

  if (action.type === "REMOVE_WISH_LIST_ITEM") {
    const wishList = state.wishList.filter((item) => {
      return item.ASIN !== action.payload;
    });

    localStorage.setItem("wishList", JSON.stringify(wishList));

    return {
      ...state,
      wishList,
    };
  }

  if (action.type === "ADD_BASKET_ITEM") {
    const index = state.basket.findIndex((item) => {
      return item.ASIN === action.payload.ASIN;
    });

    if (index === -1) {
      const basket = [
        {
          ...action.payload,
          quantity: 1,
          priceAmount: +action.payload.price.slice(1),
        },
        ...state.basket,
      ];

      localStorage.setItem("basket", JSON.stringify(basket));

      return {
        ...state,
        basket,
        total: state.basket.reduce((acc, each) => {
          const itemTotal = each.priceAmount * each.quantity;
          acc += itemTotal;

          return acc;
        }, 0),
      };
    } else {
      state.basket[index].quantity += 1;

      const newBasket = [...state.basket];

      localStorage.setItem("basket", JSON.stringify(newBasket));

      return {
        ...state,
        basket: newBasket,
        total: newBasket.reduce((acc, each) => {
          const itemTotal = each.priceAmount * each.quantity;
          acc += itemTotal;

          return acc;
        }, 0),
      };
    }
  }

  return state;
};
