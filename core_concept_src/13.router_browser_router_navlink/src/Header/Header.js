import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <NavLink to="/" activeStyle={{fontWeight: "bold",color: "red"}} exact={true}>Home</NavLink>  
            <NavLink to="/update" activeStyle={{fontWeight: "bold",color: "red"}}>Update</NavLink>
            <NavLink to="/edit" activeStyle={{fontWeight: "bold",color: "red"}}>Edit</NavLink>
            <NavLink to="/dashboard" activeStyle={{fontWeight: "bold",color: "red"}}>Dashboard</NavLink>
            {/* <NavLink to="/dashboard" activeClassName={is-active}>Dashboard</NavLink> */}
        </div>
    )
}

export default Header;
