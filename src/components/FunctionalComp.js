import React, { Component } from 'react';

const FunctionalComp = (props) =>{
    return(
        <div>
            <h1>I am Functional Comp</h1>
            <h1>I recieve this props{props.name}</h1>
        </div>
    )
}

export default FunctionalComp;