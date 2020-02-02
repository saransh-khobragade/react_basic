import React from 'react';
const Child = (props) => {
    return (
        <div>Stateless componet {props.name}</div>
    )
}
Child.defaultProps = {
    name:"default prop name"
}
export default Child;
