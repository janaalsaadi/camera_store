import React from "react";
import classes from './Footer.module.css';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import YouTube from "@material-ui/icons/YouTube";
import Pinterest from "@material-ui/icons/Pinterest";
import Facebook from "@material-ui/icons/Facebook";
import { TextField } from '@material-ui/core';
class Footer extends React.Component{
    render(){
  return (
    <div style={{backgroundColor:'lightgray' , color:'gray'}}>
         <div className={classes.footerinner}>

        <div class="footer-item">
      
            <ul className={classes.myul}>
              <li>  <h3>Help center</h3></li>
              <li className="list-unstyled">
               <a className={classes.mya} href="#!">My Account</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Order Status</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Shipping</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Returns and Exchanges</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Payments</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Gift Cards</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Live Chat</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Contact Us</a>
              </li>
            </ul>
         </div>

         <div class="footer-item">
         
            <ul className={classes.myul}>
              <li><h3>Company </h3></li>
            <li className="list-unstyled">
                <a className={classes.mya} href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!"> Store Location</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Review</a>
              </li>

            </ul>
         </div>

         <div class="footer-item">
        
         <ul className={classes.myul}>
           <li> <h3>partnerShips </h3></li>
            <li className="list-unstyled">
                <a className={classes.mya} href="#!">Goverments Sales</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Educational Sales</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Corporate Sales</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Student Discount Program</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">prospective vendors </a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">join our Affiliate Program </a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">community partners </a>
              </li>

            </ul>
         </div>

         <div class="footer-item">
        
         <ul className={classes.myul}>
           <li>
           <h3>In The Know </h3>
           </li>
            <li className="list-unstyled">
                <a className={classes.mya} href="#!">Wavelength Blog</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Events</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Q&A Forum</a>
              </li>
            </ul>
         </div>

         <div class="footer-item">
         
         <ul className={classes.myul}>
           <li><h3>1.800.221.0828</h3></li>
            <li className="list-unstyled">
                <a className={classes.mya} href="#!">Mon-Thurs 9am-5pm</a>
              </li>
              <li className={classes.mya} className="list-unstyled">
                <a className={classes.mya} href="#!">Friday 9am-1pm</a>
              </li>
  
            </ul>
         </div>

         <div class="footer-item">
         
         <ul className={classes.myul}> 
           <li><h3>Retail Store</h3></li>
            <li className="list-unstyled">
                <a className={classes.mya} href="#!">895 McDonald Ave</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Brooklyn, NY 11218</a>
              </li>
  
            </ul>

            
         <ul className={classes.myul}>
           <li><h3>Live Chat</h3></li>
         <li className="list-unstyled">
                <a className={classes.mya} href="#!">Mon-Thurs 9am-5pm</a>
              </li>
              <li className="list-unstyled">
                <a className={classes.mya} href="#!">Friday 9am-1pm</a>
              </li>
  
            </ul>

         </div>


         <div>
         <ul className={classes.myul}>
           <li>Subscribe</li>
           <br></br>
         <li className="list-unstyled">
         <div> <TextField style={{backgroundColor:'white' , borderColor:'white' , borderRadius:'15px'}}
                   placeholder="Email"
                     InputProps={{
                     endAdornment: (
                      <InputAdornment>
                     <IconButton>
                     <ArrowForward />
                    </IconButton>
                   </InputAdornment>
                              )
                            }}
                          />
                      </div>    
              </li>
              <br></br>
              <li style={{paddingLeft:'20%'}}>
              <Facebook /> <Twitter/> <Instagram/> <YouTube/> <Pinterest/>
              </li>

            </ul>
         </div>

         </div>

         <p style={{padding:'1%' , color:'gray'}}>© 1997-2020 Focus Camera , inc All Rights Reserved</p>

         </div>


  )
          
}
}

export default Footer;