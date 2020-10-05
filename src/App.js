import React ,{Component}from 'react';
import Clock from './components/clock/Clock';
import Header from './components/header/Header';
class App extends React.Component{

  render(){
  return (
    <div>
      <Header/>
       <Clock/>

    </div>
  );
}
}

export default App;
