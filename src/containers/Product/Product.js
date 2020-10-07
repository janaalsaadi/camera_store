import React , { Component}from 'react';
import Products from "./Product.json";
import ProductItem from './ProductItem/ProductItem';
import classes from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
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
                     <div className={classes.Box}>
                     <div className={classes.SideDiv}>FILTER BY<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'60%'}}/></div>
                        <div className={classes.innerSide}  >
                            
                               <p> <input type="checkbox" /><a href="#">Free 2 Day Shipping (294)</a></p>
                                <p><input type="checkbox" /><a href="#">Free Standard Shipping (853)</a></p>
                               <p><input type="checkbox" /><a href="#">Rebate Available (237)</a></p>
                            
                        </div>
                     </div>
                     <br></br>

                     <div className={classes.Box}>
                     <div className={classes.SideDiv}>FLENS INCLUDED<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'90%'}}/></div>
                        <div className={classes.innerSide} >


                               <p> <input type="checkbox" /><a href="#">18-55mm (47)</a></p>
                                <p><input type="checkbox" /><a href="#">Free Standard Shipping (853)</a></p>
                               <p><input type="checkbox" /><a href="#">28-70mm (30)</a></p>
                               <p><input type="checkbox" /><a href="#">16-50mm (30)</a></p>
                               <p><input type="checkbox" /><a href="#">16-50mm & 55-210mm (20)</a></p>
                            
                        </div>
                     </div>


                      <br></br>

                     <div className={classes.Box}>
                     <div className={classes.SideDiv}><p style={{fontSize:'5px'}}>LCD SCREEN TYPE</p><FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'50%'}}/></div>
                        <div className={classes.innerSide} >
                            
                               <p> <input type="checkbox" /><a href="#">18-55mm (47)</a></p>
                                <p><input type="checkbox" /><a href="#">Free Standard Shipping (853)</a></p>
                               <p><input type="checkbox" /><a href="#">28-70mm (30)</a></p>
                               <p><input type="checkbox" /><a href="#">16-50mm (30)</a></p>
                               <p><input type="checkbox" /><a href="#">16-50mm & 55-210mm (20)</a></p>
                            
                        </div>
                     </div>



                 </div>

                
                 

             </div>

             



             <div>
                 <div className={classes.ProductType}>
                     <div className={classes.Box}>SHOW BY PRODUCT TYPE</div>
                     <div className={classes.First}>
                         {images.map((image , index)=> (
                             <div className={classes.Sec} key={index}> 
                                 <img src={image.src} style={{ width:'75%'}}/>
                             <p className={classes.innerP}><a href="#">{image.txt}</a></p>
                             </div>

                         ))}


                     </div>
                 </div>
            {Products.map((prod,index) => ( 
            <ProductItem 
            key={index}
            id={prod.id}
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