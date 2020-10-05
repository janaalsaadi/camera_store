import React ,{Component}from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faCalendar } from '@fortawesome/free-solid-svg-icons';
import Switch from "react-switch";

class App extends React.Component{

  state ={
    checked:false,
    date: new Date()
  }

  handleChange =() =>{
    this.setState({checked:!this.state.checked});
  }
   
  render(){
   
    let displayDate;
  if(this.state.checked == true){
   displayDate= <span>{this.state.date.toLocaleDateString()}</span>
  }
  return (
    <div>

      <div className={classes.myHeader}> <FontAwesomeIcon icon={faClock} />  
      <p> React Clock </p></div>


       <div className={classes.mySwitch}>
        <div> <Switch onChange={this.handleChange} checked={this.state.checked}  onClick={this.handleChange}/></div>
       <div>  <FontAwesomeIcon icon={faCalendar}/> </div>
       </div>

        <div  className = {classes.Clock}>
          <br></br>
        
        <div>{this.state.date.toLocaleTimeString()}</div>
        <div>{displayDate}</div>




        </div>
  
      
    
    </div>
  );
}
}

export default App;
