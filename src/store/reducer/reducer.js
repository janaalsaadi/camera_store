import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
};

const orderSuccess = (state, action) => {
   
    var i=0;
    let newOrder = { 
           id: action.orderInfo.orderid,
           name: action.orderInfo.orderName,
           image:action.orderInfo.image,
           price:action.orderInfo.price,
           qta:action.orderInfo.qta,
    }
    console.log(newOrder);
    return {
        ...state,
        orders:state.orders.concat(newOrder)
        
    }
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
