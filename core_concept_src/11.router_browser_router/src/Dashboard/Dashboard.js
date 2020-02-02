import React from 'react';
const Dashboard = (props) => {
    return (
        <div>Dashboard {props.match.params.id}</div>
    )
}
export default Dashboard;
