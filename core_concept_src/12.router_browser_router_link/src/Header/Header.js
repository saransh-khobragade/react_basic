import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>  
            <Link to="/update">Update</Link>
            <Link to="/edit">Edit</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}
export default Header;
