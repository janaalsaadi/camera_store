import React , {Component} from 'react';
import { connect } from "react-redux";


class Cart extends Component{
    qtyHandler = () =>{

    }
    render(){

        return(
            <div>
            <h1>My Cart</h1>
            <br></br>
            
            <div style={{ width:'90%' , margin:'auto' , display:'flex' , justifyContent:'space-between'}}>
                <p style={{flex:'70%' , textAlign:'left'}}>item</p>
                <div style={{ flex:'30%',margin:'auto' , display:'flex' , justifyContent:'space-between' }}>
                    <p>UNITE PRICE </p>
                    <p style={{textAlign:'left' , backgroundColor:'red'}}>QTY</p>
                    <p>TOTAL</p>
                </div>
            </div>

            {this.props.ord.map((item ,index) => (
                          <div key={index} style={{border:'1px solid gray' , width:'90%' , margin:'auto', display:'flex',justifyContent:'space-between' }}>
                              <div  style={{flex:'70%'  ,display:'flex' , justifyContent:'space-between'}}>
                              <img src={item.image}></img>
                               <p ><b>{item.name}</b></p>
                               </div>
                               <div style={{ flex:'30%', display:'flex' , justifyContent:'space-between' ,}}>
                                <p>{item.price}</p>
                                <div style={{ display:'flex' , flexDirection:"column" , justifyContent:'right',width:"30%" , paddingTop:'8%'}} >
                                <input type="text" onChange={this.qtyHandler} style={{  marginLeft:'45%',textAlign:'right',height:'10%',width:'10%' , marginTop:'2%'}} value={item.qta}/>
                                <button>Update Qty</button>
                                <button>Remove</button>
                                </div>
                                <p>{Number.parseInt(item.price) * Number.parseInt(item.qta)}</p>
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



export default connect(mapStateToProps) (Cart);