import React, { Component } from 'react';

class Comp1 extends Component {
    constructor(props){
        super(props)
        this.show=this.show.bind(this)
    }
    show(){
        alert(this.props.data)
    }
    show1(){
        alert(this.props.data)
    }
    show2 = () => {
        alert(this.props.data)
    }
    show3= () => {
        alert(this.props.data)
    }
    render() {
        return (
            <div>
                <button onClick={this.show}>show function constructor</button>
                <button onClick={this.show1.bind(this)}>show normal function</button>
                <button onClick={this.show2}>show arrow function</button>
            </div>

        );
    }
}

export default Comp1;