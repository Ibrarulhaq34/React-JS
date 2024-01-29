import React, { Component } from 'react';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';

class Main extends Component {
constructor(props) {
super(props);
this.state = {
    date: new Date()
}
this.handleClick = this.handleClick.bind(this);
}
handleClick(){
    alert("I am Clicked");
    }
render() {
return (
    <div >
    <h1>It is Main Component</h1>
    <h1>Date is {this.state.date.toLocaleTimeString()}</h1>
  
    <FunctionalComp name=" Ibrar Ul Haq"/>
    <ClassComp name=" Nishad"/>
    <button onClick={this.handleClick}>Click Me</button>
    </div>
    
);
}
}
export default Main;