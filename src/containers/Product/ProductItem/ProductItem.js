import React , { Component}from 'react';
import classes from './ProductItem.module.css';
import ReactStars from "react-rating-stars-component";


export default class ProductItem extends Component{

   

    render(){
        
        return(
            
            <div className={classes.Container}>
                <div style={{float:'left' , paddingTop:'5%' }}>
                    <img src={this.props.image} />
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
                        {this.props.info.map(item => (
                            <li>{item.data}</li>
                        ))}
                    </ul>

                    <div style={{paddingLeft:'0%' , fontWeight:'bold'}} ><a className={classes.myLink} >In Stock</a> / <a className={classes.myLink}>Free Shipping</a></div>
                    </div>

                    <div className={classes.Buy}>
                        <h3 style={{color:'#8B0000', textAlign:'center'}}>{this.props.price}</h3>
                        <p>Pay { this.props.price} / month with <b>affirm</b></p>
                        <p><a>Learn more</a></p>
                        <p ><b>Qty:</b> <input type="text" style={{width:'15%'}}/> </p>
                        <p style={{ height:'17%'}}>
                        <button className={classes.myButton}
                    
                         >ADD TO CART</button>
                        </p>


                     </div>
                  </div>
                </div>


        )
    }
}