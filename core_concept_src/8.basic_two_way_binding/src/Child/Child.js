import React from 'react';

const Child = (props) => {
    return (
        <div>
            Name:{props.name}
            <input type="text" onChange={props.changed}></input>
        </div>        
    )
};

export default Child;