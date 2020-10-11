import React , { Component}from 'react';
import classes from './ProductItem.module.css';
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import Modal from 'react-modal';


const customStyles = {
    content : {
        width:'60%',
        height:'60%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)',
      border:'5px solid gray',
      paddingLeft:'5%'
    }
  };
 class ProductItem extends Component{

    state={
        qty:0,
        orders:[],
        modalOpened:false
    }
   

    toggleModal = () => {
        this.setState({ modalOpened: !this.state.modalOpened });
      }

    qtyProductHandler = (value) => {
        this.setState({qty:value});
    }
    render(){
        
        return(
            
            <div className={classes.Container}>
                <div style={{float:'left' , paddingTop:'5%' }}>
                    <img src={this.props.image} onClick={this.toggleModal} />
                    <div style={{marginLeft:'25%' , marginTop:'-16%'}}>
                    <ReactStars 
                       count={5}
                       value={4.5}
                       size={24}
                       isHalf={true}
                       activeColor="#ffd700"
                    />
                    </div>
                </div>

                


                
                
                <div style={{marginBottom:'1%' }}>
                    <div >
                    <h4>{this.props.name} </h4>
                    </div>
                  <div className={classes.topInfo}>
                    <div>MFR: {this.props.MFR}</div> 
                    <div>|</div>
                    <div>FC: {this.props.Fc}</div>
                    <div>|</div>
                    <div>Condition:<a className={classes.myLink}> New </a></div>
                   </div>
                </div>

                  <div style={{display:'flex' , flexDirection:'row' }}>
                    <div style={{ width:'63%'}}>  
                    <ul  style={{paddingLeft:'5%',width:'98%'}}>
                        {this.props.info.map((item,index) => (
                            <li key={index}>{item.data}</li>
                        ))}
                    </ul>

                    <div style={{paddingLeft:'0%' , fontWeight:'bold'}} ><a className={classes.myLink} >In Stock</a> / <a className={classes.myLink}>Free Shipping</a></div>
                    </div>

                    <div className={classes.Buy}>
                        <h3 style={{color:'#8B0000', textAlign:'center'}}>{this.props.price}</h3>
                        <p>Pay { this.props.price} / month with <b>affirm</b></p>
                        <p><a>Learn more</a></p>
                        <p ><b>Qty:</b> <input type="text" style={{width:'15%'}} onChange={item => this.qtyProductHandler(item.target.value)}/> </p>
                        <p style={{ height:'17%'}}>
                            
                       
                             <button style={{backgroundColor:'#8B0000' , borderRadius:'10px'}} onClick={() => this.props.onOrderAdded(this.props.name, this.props.image , this.props.price , this.state.qty)}>
                             <NavLink className={classes.myButton}
                             style={{backgroundColor:'#8B0000' , textDecoration:'none'}}
                        to = "/cart"
                         >
                             ADD TO CART
                             </NavLink>
                             </button>
                         
                        </p>


                     </div>
                  </div>







                  <Modal  style={customStyles}
          
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
        >


<div className={classes.Container}>
                <div style={{float:'left' , paddingTop:'5%' , marginRight:'1%' , height:'80%'}}>
                    <img src={this.props.image} style={{height:'100%' , width:'100%'}}  />
                </div>

           <div style={{marginBottom:'1%' }}>
                    <div >
              

                    <h4 style={{textAlign:'left'}}>{this.props.name} </h4>
                    </div>
                  <div className={classes.topInfo}>
                    <div>MFR: {this.props.MFR}</div> 
                    <div>|</div>
                    <div>FC: {this.props.Fc}</div>
                    <div>|</div>
                    <div>Condition:<a className={classes.myLink}> New </a></div>
                   </div>
                </div>

                  <div style={{display:'flex' , flexDirection:'row' }} >
                    <div style={{ width:'63%'}}>  
                    <ul  style={{paddingLeft:'5%',width:'98%'}}>
                        {this.props.info.map((item,index) => (
                            <li key={index}>{item.data}</li>
                        ))}
                    </ul>

                    <div style={{paddingLeft:'0%' , fontWeight:'bold'}} ><a className={classes.myLink} >In Stock</a> / <a className={classes.myLink}>Free Shipping</a></div>
                    </div>

                    <div className={classes.Buy} >
                        <h3 style={{color:'#8B0000', textAlign:'center'}}>{this.props.price}</h3>
                        <p>Pay { this.props.price} / month with <b>affirm</b></p>
                        <p><a>Learn more</a></p>
                        <p ><b>Qty:</b> <input type="text" style={{width:'15%'}}/> </p>
                        <p style={{ height:'17%'}}>
                            
                       
                             <button style={{backgroundColor:'#8B0000' , borderRadius:'10px'}} >
                             <NavLink className={classes.myButton}
                             style={{backgroundColor:'#8B0000' , textDecoration:'none'}}
                        to = "/cart"
                         >
                             ADD TO CART
                             </NavLink>
                             </button>
                         
                        </p>


                     </div>
                  </div>
                </div>
  

        </Modal>
            


                </div>


        )
    }
}


const mapDispathToProps = dispatch => {
return{
 onOrderAdded :(name , image , price , qty ) =>
     dispatch({type:"ORDER" , orderInfo:{name:name , image:image , price:price, qty:qty }}),
 
 
}

}


export default connect(null , mapDispathToProps) (ProductItem);