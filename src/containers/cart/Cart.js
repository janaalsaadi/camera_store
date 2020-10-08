import React , {Component} from 'react';
import { connect } from "react-redux";
import classes from './Cart.module.css';


class Cart extends Component{
    state = {
        newQta:'',
    }
    qtyHandler = (value) =>{
    
        this.setState({newQta:value})

    }

    handleEmailListChange(index, event) {
        var orders = this.props.orders.slice(); // Make a copy of the emails first.
        orders[index].qty = event.target.value; // Update it with the modified email.
        this.setState({orders: orders}); // Update the state.
    }

    render(){

        return(
            <div>
            <h1>My Cart</h1>
            <br></br>
            
            <div className={classes.ProductInfo}>
                <p className={classes.itemDiv}>item</p>
                <div className={classes.itemDetail}>
                    <p>UNITE PRICE </p>
                    <p>QTY</p>
                    <p>TOTAL</p>
                </div>
            </div>
 
            {this.props.ord.map((item ,index) => (
                          <div key={index} className={classes.ProductInfo} >
                              <div  className={classes.pic}>
                              <img src={item.image}></img>
                               <p ><b>{item.name}</b></p>
                               </div>
                               <div className={classes.itemInfo}>
                                <p>{item.price}</p>
                                <div className={classes.actions}>
                                <input type="text"
                                 onChange={(event) => this.setState({newQta:event.target.value})}
                                 className={classes.myInput} 
                                 value={this.state.newQta} placeholder={item.qty} />
                                <button 
                                onClick={() => this.props.onUpdateQty(item.name,this.state.newQta)}
                                className={classes.myBtn}>Update Qty</button>
                                <button 
                                onClick={() => this.props.onDelete(item.name)}
                                className={classes.myBtn}>Remove</button>
                                </div>
                                <p>{Number.parseInt(item.price) * Number.parseInt(item.qty)}</p>
                                </div>

                          </div> 
                      ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      ord:state.orders
    }
}

const mapDispathToProps = dispatch => {
    return{
     onUpdateQty :(name ,qty ) =>
         dispatch({type:"UPDATE" , updateInfo:{name:name,qty:qty}}),
     onDelete:(name) => 
     dispatch({type:"DELETE" , deleteInfo:{name:name}})    

    }
    }

export default connect(mapStateToProps, mapDispathToProps) (Cart);