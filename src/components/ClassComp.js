import React, { Component } from 'react';


class ClassComp extends Component {
constructor(props) {
super(props);
this.state = {
    name:"Azher"
}

}

render() {
    let name=" Wali";
return (
    <div>
    <h1>It is Class Component</h1>
    <h1>my state Value is {this.state.name}</h1>
    <h1>prop value is {this.props.name}</h1>
    <h1>Normal Variable is{name}</h1>
    </div>
    
);
}
}
export default ClassComp ;