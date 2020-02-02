import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props)
        this.handleOnChange=this.handleOnChange.bind(this)
        this.handleRemoveClick=this.handleRemoveClick.bind(this)
    }
    state={
        inputbox:""
    }
    handleOnChange = (e)=>{
        let value = e.target.value;
        if(value){
            this.setState(()=>({
                inputbox:value
            }))
        }
    }
    handleAddClick = ()=>{
        this.props.addOne(this.state.inputbox)
    }
    handleRemoveClick = (x)=>{
        this.props.removeOne(x)
    }
    render (props){
        return(
            <table>
                <tbody>
                    { this.props.data.map( x=> 
                        <tr key={x} >
                            <td>{x}</td>
                            <td><button onClick={this.handleRemoveClick.bind(this,x)}>remove</button></td>  
                        </tr>
                    )}
                    <tr>
                        <td><input type="text" onChange={this.handleOnChange} value={this.state.inputbox}></input></td>
                        <td>    
                            <button onClick={this.handleAddClick}>Add</button>
                            <button onClick={this.props.removeAll}>Remove all</button>
                        </td>
                    </tr>  
                </tbody>
            </table>
        )
    }
}

export default Child;