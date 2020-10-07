import React , {Component} from 'react';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../imges/logo.gif';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';

class Header extends Component{
    render(){
        return(
           
           <div className={classes.myHeader}>
            <div style={{backgroundColor:'white'}}><img src={logo}></img></div> 
            <div style={{color:'white' , fontSize:'30px'}}> Shopping Store</div>

            <div className={classes.headerItem}  >
           <div> <TextField style={{backgroundColor:'white' , borderColor:'white' , borderRadius:'15px'}}
                   placeholder="Search"
                     InputProps={{
                     endAdornment: (
                      <InputAdornment>
                     <IconButton>
                     <SearchIcon />
                    </IconButton>
                   </InputAdornment>
                              )
                            }}
                          />
                      </div>    
                <div> <FontAwesomeIcon icon={faShoppingCart}/></div>
            </div>
           
           </div>
        )
    }
}

export default Header;