import React, { Component } from 'react';

class Child extends Component {
    
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    
    render(){
        return(
            <div>{this.props.data}</div>
        )
    }
}

export default Child;