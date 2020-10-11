import React , { Component}from 'react';
import Products from "./Product.json";
import ProductItem from './ProductItem/ProductItem';
import classes from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
export default class Product extends Component{

   state={
       checkPrice1:false,
       checkPrice2:false,
       checkPrice3:false,
       checkCategory1:false,
       checkCategory2:false,
   }

   checkPriceHandler1= () => {
       this.setState({checkPrice1:!this.state.checkPrice1})

   } 

   checkPriceHandler2= () => {
    this.setState({checkPrice2:!this.state.checkPrice2})

} 

checkPriceHandler3= () => {
    this.setState({checkPrice3:!this.state.checkPrice3})

} 
   checkCategoryHandler1= () => {
    this.setState({checkCategory1:!this.state.checkCategory1})
} 

checkCategoryHandler2= () => {
    this.setState({checkCategory2:!this.state.checkCategory2})
} 


    render(){
        const images = [
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/DSLR.jpg", txt:"DSLR"},
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/mirrorless_1.jpg" , txt:"MirrorLess"},
            {src: "https://cdn3.focuscamera.com/media//catalog/category/cache/medium_format.jpg" , txt:'Medium Format'},
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/point_n_shoot.jpg" , txt:'Point & Shot'},
            {src:"https://cdn3.focuscamera.com/media//catalog/category/cache/Untitled-3.jpg" , txt:'instant'},
            {src: "https://cdn3.focuscamera.com/media//catalog/category/cache/specialty_1.jpg" , txt:"specialty"},
        ]



            let displayProduct;


            
             if(this.state.checkCategory1 && this.state.checkPrice1){

                displayProduct=
                Products.filter(prod => prod.category == "camera" && prod.price <200 && prod.price >50).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }

             else if(this.state.checkCategory1 && this.state.checkPrice2){

                displayProduct=
                Products.filter(prod => prod.category == "camera" && prod.price <400 && prod.price >200).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }

             else if(this.state.checkCategory1 && this.state.checkPrice3){

                displayProduct=
                Products.filter(prod => prod.category == "camera" &&  prod.price >400).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }


             





             else if(this.state.checkCategory2 && this.state.checkPrice1){

                displayProduct=
                Products.filter(prod => prod.category == "Lighting" && prod.price <200 && prod.price >50).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }

             else if(this.state.checkCategory2 && this.state.checkPrice2){

                displayProduct=
                Products.filter(prod => prod.category == "Lighting" && prod.price <400 && prod.price >200).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }

             else if(this.state.checkCategory2 && this.state.checkPrice3){

                displayProduct=
                Products.filter(prod => prod.category == "Lighting" &&  prod.price >400).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }

            else if(this.state.checkPrice1){

               
                 displayProduct=
                 Products.filter(prod => prod.price <200 && prod.price >50).map((prod,index) => ( 
                 <ProductItem 
                 key={index}
                 name = {prod.name}
                 price={prod.price}
                 image={prod.image}
                 info={prod.info}
                 MFR={prod.MFR}
                 Fc ={prod.FC}
                 > </ProductItem>
                 
                 ))

             }

             else if(this.state.checkPrice2){

                displayProduct=
                Products.filter(prod =>  prod.price <400 && prod.price >200).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }

             else if(this.state.checkPrice3){

                displayProduct=
                Products.filter(prod =>  prod.price >400).map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }


             else if(this.state.checkCategory1){

                displayProduct=
                Products.filter(prod => prod.category == "camera").map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }



             else if(this.state.checkCategory2){

                displayProduct=
                Products.filter(prod => prod.category == "Lighting").map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
                 
             }


       
             else{
                displayProduct=
                Products.map((prod,index) => ( 
                <ProductItem 
                key={index}
                name = {prod.name}
                price={prod.price}
                image={prod.image}
                info={prod.info}
                MFR={prod.MFR}
                Fc ={prod.FC}
                > </ProductItem>
                
                ))
             }


             
        
        return(
            <div className={classes.Content}>
             <div className={classes.Side} >
                 <p style={{width:'100%' , textAlign:'left'}}><a href="#">Home</a>/ <a href="#">PHOTO&VIDEO</a>/ <a href="#">CAMERAS</a></p>



                 <div className={classes.jana}>
                     <div className={classes.Box }>
                     <div className={classes.SideDiv}>FILTER BY{/*<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'65%'}}/ >*/}</div>
                        <div className={classes.innerSide}  >
                        <div> <input type="checkbox"  onChange={this.checkPriceHandler1} checked={this.state.checkPrice1} /><label>Price 50-200$</label> </div>
                        <div> <input type="checkbox"  onChange={this.checkPriceHandler2} checked={this.state.checkPrice2} /><label>Price 200-400$</label> </div>
                        <div> <input type="checkbox"  onChange={this.checkPriceHandler3} checked={this.state.checkPrice3} /><label>Price more than 1000$</label> </div>
                        <div> <input type="checkbox"  onChange={this.checkCategoryHandler1} checked={this.state.checkCategory1}/><label>Category : Camera</label> </div>
                        <div> <input type="checkbox"  onChange={this.checkCategoryHandler2} checked={this.state.checkCategory2}/><label>Category : Light</label> </div>
                        </div>
                     </div>
                     <br></br>

                     <div className={classes.Box}>
                     <div className={classes.SideDiv}>FLENS IN{/*<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'65%'}}/ >*/}</div>
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
                     <div className={classes.SideDiv}>LCD SCR{/*<FontAwesomeIcon  icon={faArrowDown} style={{paddingLeft:'65%'}}/ >*/}</div>
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

             



             <div className={classes.jana2}>
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

              

                {displayProduct} 

            </div>
            
              </div>
        )
    }
}

