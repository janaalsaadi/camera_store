import React , {Component} from 'react';
import Modal from 'react-modal';
import classes from './MyImage.module.css';
import {NavLink} from 'react-router-dom';
const customStyles = {
    content : {
        width:'60%',
        height:'60%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)',
      border:'5px solid gray'
    }
  };

class MyImage extends Component{
    

    state={
        modalOpened:false
     }
    toggleModal = () => {
        this.setState({ modalOpened: !this.state.modalOpened });
      }

    render(){
        return(
            <div>
            <img  src={this.props.imgLink} onClick={this.toggleModal}/>

            <Modal  style={customStyles}
          
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
        >


<div className={classes.Container}>
                <div style={{float:'left' , paddingTop:'5%' , marginRight:'1%' , height:'80%'}}>
                    <img src={this.props.imgLink} style={{height:'100%' , width:'100%'}}  />
                </div>

           <div style={{marginBottom:'1%' }}>
                    <div >
              

                    <h4 style={{textAlign:'left'}}>{this.props.name} </h4>
                    </div>
                  <div className={classes.topInfo}>
                    <div>MFR: {this.props.MFR}</div> 
                    <div>|</div>
                    <div>FC: {this.props.FC}</div>
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

export default MyImage;