import React , { Component}from 'react';
import Products from "./Product.json";
import ProductItem from './ProductItem/ProductItem';
import classes from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
export default class Product extends Component{



    render(){
        const images = [
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/DSLR.jpg", txt:"DSLR"},
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/mirrorless_1.jpg" , txt:"MirrorLess"},
            {src: "https://cdn3.focuscamera.com/media//catalog/category/cache/medium_format.jpg" , txt:'Medium Format'},
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/point_n_shoot.jpg" , txt:'Point & Shot'},
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/Untitled-3.jpg" , txt:'instant'},
            {src: "https://cdn3.focuscamera.com/media//catalog/category/cache/specialty_1.jpg" , txt:"specialty"},
        ]

        return(
            <div className={classes.Content}>
             <div className={classes.Side} >
                 <p><a href="#">Home</a>/ <a href="#">PHOTO&VIDEO</a>/ <a href="#">CAMERAS</a></p>



                 <div>
                     <div className={classes.Box }>
                     <div className={classes.SideDiv}>FILTER BY<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'65%'}}/></div>
                        <div className={classes.innerSide}  >

                            
                        <div> <input type="checkbox"  /><label>Free 2 Day Shipping (294)</label> </div>
                            <div> <input type="checkbox" /><label>Free Standard Shipping (853)</label> </div>
                            <div> <input type="checkbox"  /><label>Rebate Available (237)</label> </div>     
                        </div>
                     </div>
                     <br></br>

                     <div className={classes.Box}>
                     <div className={classes.SideDiv}>FLENS IN<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'65%'}}/></div>
                        <div className={classes.innerSide} >


                            <div> <input type="checkbox"  /><label>18-55mm (47)</label> </div>
                            <div> <input type="checkbox" /><label>Free Standard Shipping (853)</label> </div>
                            <div> <input type="checkbox"  /><label>28-70mm (30)</label> </div>
                            <div> <input type="checkbox" /><label>16-50mm (30)</label> </div>
                            <div> <input type="checkbox" /><label>16-50mm & 55-210mm (20)</label> </div>
                           
                        </div>
                     </div>


                      <br></br>

                     <div className={classes.Box}>
                     <div className={classes.SideDiv}>LCD SCR<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'70%'}}/></div>
                        <div className={classes.innerSide} >
                            
                        <div> <input type="checkbox"  /><label>18-55mm (47)</label> </div>
                            <div> <input type="checkbox" /><label>Free Standard Shipping (853)</label> </div>
                            <div> <input type="checkbox"  /><label>28-70mm (30)</label> </div>
                            <div> <input type="checkbox" /><label>16-50mm (30)</label> </div>
                            <div> <input type="checkbox" /><label>16-50mm & 55-210mm (20)</label> </div>
                            
                        </div>
                     </div>



                 </div>

                
                 

             </div>

             



             <div>
                 <div className={classes.ProductType}>
                     <div className={classes.Box, classes.TopBox}>SHOW BY PRODUCT TYPE</div>
                     <div className={classes.First}>
                         {images.map((image , index)=> (
                             <div className={classes.Sec} key={index}> 
                                 <img src={image.src} style={{ width:'75%'}}/>
                             <p className={classes.innerP}><a href="#" style={{textDecoration:'none' , color:'black'}}>{image.txt}</a></p>
                             </div>

                         ))}


                     </div>
                 </div>
            {Products.map((prod,index) => ( 
            <ProductItem 
            key={index}
            name = {prod.name}
            price={prod.price}
            image={prod.image}
            info={prod.info}
            MFR={prod.MFR}
            Fc ={prod.FC}
            > </ProductItem>
            
            ))}  
            </div>
            
              </div>
        )
    }
}

