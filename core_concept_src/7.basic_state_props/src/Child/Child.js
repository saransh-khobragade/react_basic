import React, { Component } from 'react';


const Child =(props)=> {
    return(
        <div>
            <button onClick={props.func}>{props.data}</button>
        </div>
    )
} 

export default Child;