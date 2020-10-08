import { act } from "react-dom/test-utils";
import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
};



const QTYupdate = (state, action)=>{

  let index = state.orders.findIndex(order => order.name === action.updateInfo.name);
  
    let copyOrders = [...state.orders];
    copyOrders[index] = {...copyOrders[index], qty:action.updateInfo.qty};
  return {
      ...state,
      orders:copyOrders
      
  }
}


  const deleteProduct  = (state,action) => {
    return{
      ...state,
      orders:state.orders.filter(prod => prod.name !== action.deleteInfo.name)
    }
  }


const orderSuccess = (state, action) => {

  
  let newOrder = {
    name: action.orderInfo.name,
    image:action.orderInfo.image,
    price:action.orderInfo.price,
    qty:action.orderInfo.qty,
  }


  
  let index = state.orders.findIndex(order => order.price === newOrder.price);
  console.log(state.orders[index]);

  if(index > -1){
    let copyOrders = [...state.orders];
    copyOrders[index] = {...copyOrders[index], qty:Number.parseInt(newOrder.qty) + Number.parseInt(copyOrders[index].qty) , name:copyOrders[index].name , image:newOrder.image, price:newOrder.price};
  return {
      ...state,
      orders:copyOrders
      
  }

  }
  else{
    return {
      ...state,
      orders:state.orders.concat(newOrder)
      
  }
  }




}
  /*
  let index = state.orders.findIndex(order => order.name === action.orderInfo.name);
  console.log("hii")
  console.log(index);
  if(index > -1){
    console.log("i find similer product");
  let orders = [...state.orders];
  orders[index] = {...orders[index], qty: action.orderInfo.qty};
  return {...state, orders}
  }

  else{
    let newOrder = {
      name: action.orderInfo.orderName,
      image:action.orderInfo.image,
      price:action.orderInfo.price,
      qty:action.orderInfo.qty,
    }
    return{
      ...state, 
      orders:state.orders.concat(newOrder)
    }
  }
}*/

/*
 if(state.orders !== null){
  return state.orders.map(product => {
    if (product.name === action.orderInfo.name) {
      return {...state, qty: Number.parseInt(product.qty)+ Number.parseInt(action.orderInfo.qty)}
    }
    else{
      let newOrder = {
        name: action.orderInfo.orderName,
        image:action.orderInfo.image,
        price:action.orderInfo.price,
        qty:action.orderInfo.qty,
      }
      return{
        ...state, 
        orders:state.orders.concat(newOrder)
      }
    }
  })}

  else{
    let newOrder = {
      name: action.orderInfo.orderName,
      image:action.orderInfo.image,
      price:action.orderInfo.price,
      qty:action.orderInfo.qty,
    }
    return{
      ...state, 
      orders:state.orders.concat(newOrder)
    }
  }

}*/


 /* let itemFound = state.orders.filter(prod => prod.name == action.orderInfo.orderName);

  if(itemFound){
  console.log("i find similer item");
  itemFound.qty = Number.parseInt(itemFound.qty)+Number.parseInt(action.orderInfo.qty);
  console.log(itemFound);
  }*/
  /* state.orders.map(prod => {
    if( prod.name === action.orderInfo.orderName){
       prod.qty =Number.parseInt(prod.qty) + Number.parseInt(action.orderInfo.qty);
    }
    else{
      
        let newOrder = { 
          name: action.orderInfo.orderName,
          image:action.orderInfo.image,
          price:action.orderInfo.price,
          qta:action.orderInfo.qta,
      }

       state.orders.concat(newOrder);
    }
  }
 )

 return {
   orders:state.orders
 }
*/
/*
state.orders.concat(init)
  const index = state.orders.findIndex(item => item.name !== action.orderInfo.name); //finding index of the item
  if(index){
  const newArray = [...state.orders]; //making a new array
  newArray[index].qty =  Number.parseInt(newArray[index].qty) + Number.parseInt(action.orderInfo.qty); //changing value in the new array
  return { 
   ...state, //copying the orignal state
   orders: newArray, //reassingning todos to new array
  }
 }

 else{
  let newOrder = { 
    name: action.orderInfo.name,
    image:action.orderInfo.image,
    price:action.orderInfo.price,
    qty:action.orderInfo.qty,
}
return{
  ...state,
  orders:state.orders.concat(newOrder)
}

 }*/




const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ORDER:
        return orderSuccess(state, action);
    
    case actionTypes.UPDATE:
      return QTYupdate(state , action); 
      
    case actionTypes.DELETE:
      return deleteProduct(state, action);  

    default:
      return state;
  }
};

export default reducer;
