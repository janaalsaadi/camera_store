
import React from 'react';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faCalendar } from '@fortawesome/free-solid-svg-icons';
class Header extends React.Component {



  render() {
    return (
        <div className={classes.myHeader}> <FontAwesomeIcon icon={faClock} />  
      <p> React Clock </p></div>


    )
  }
}

export default Header;