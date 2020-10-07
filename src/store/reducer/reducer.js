import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: []
};

const orderSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
      orders: state.orders.concat(newOrder),
    });
  };
  

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ORDER:
        return orderSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
