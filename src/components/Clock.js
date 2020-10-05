import React from 'react';
import classes from './Clock.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faCalendar } from '@fortawesome/free-solid-svg-icons';
import Switch from "react-switch";

var time = new Date();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
var hours = time.getHours();
var _this = this;
var timer ;
var amPm = time.getHours() > 12 ? "pm" : "am";
minutes = minutes < 10 ? "0"+ minutes : minutes;
seconds = seconds < 10 ? "0"+ seconds : seconds;
hours = hours < 10 ? "0"+ hours : hours;
hours = hours > 12 ? hours - 12 : hours;


class Clock extends React.Component {

  state ={
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    amPm: amPm,
    amPm: amPm,
    date: new Date(),
    checked:false,
  }
 
  
  componentDidMount(){
    _this = this;

timer = setInterval(function(){
time = new Date();
minutes = time.getMinutes();
seconds = time.getSeconds();
hours = time.getHours();
minutes = minutes < 10 ? "0"+ minutes : minutes;
seconds = seconds < 10 ? "0"+ seconds : seconds;
hours = hours < 10 ? "0"+ hours : hours;
hours = hours > 12 ? hours - 12 : hours;
hours = hours == 0 ?  12 : hours;
_this.setState({
 minutes: minutes,
 seconds: seconds,
 hours: hours,
 amPm: amPm
})},1000);
}

  handleChange =() =>{
    this.setState({checked:!this.state.checked});
  }
   
 
  render() {
         
    let displayDate;
    if(this.state.checked == true){
     displayDate= <span>{this.state.date.toLocaleDateString()}</span>
    }
    return (

        <div>

       <div className={classes.mySwitch}>
        <div> <Switch onChange={this.handleChange} checked={this.state.checked}  onClick={this.handleChange}/></div>
       <div>  <FontAwesomeIcon icon={faCalendar}/> </div>
       </div>
      
        <div  className={classes.Clock}>
      <div>{this.state.hours}:{this.state.minutes}:{this.state.seconds} {this.state.amPm}</div>
      {displayDate}
      </div>
      </div>
    )
  }
}

export default Clock;