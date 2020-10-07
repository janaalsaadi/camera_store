import React from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/navigation/Toolbar/Toolbar";
import Footer from '../../components/navigation/footer/Footer';

class Layout extends React.Component {


  render() {
    return (
      <Aux>
        <Toolbar/>
        <main className={classes.Content}>{this.props.children}</main>
        <Footer/>
      </Aux>
    );
  }
}

export default Layout;
