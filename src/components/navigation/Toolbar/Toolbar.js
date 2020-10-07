import React from "react";
import classes from "./Toolbar.module.css";
import Header from '../Header/Header';
import NavigationItems from "../NavigationItems/NgnItems";
import Aux from '../../../hoc/Auxiliary/Auxiliary';



const toolbar = props => {
  return (
      <Aux>
    <Header/>
      <nav>
        <NavigationItems />
      </nav>
  
    </Aux>
  );
};

export default toolbar;
