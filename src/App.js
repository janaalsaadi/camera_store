import React ,{Component}from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
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
