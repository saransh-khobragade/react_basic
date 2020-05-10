import React,{Component} from 'react';
import './App.css';

class App extends Component {
  render() {

    const arr=["number1","number2","number3"]
    return (
      <div className="test1">
        { arr.map(x=> <div key={x}>options are {x}</div> ) }
      </div>
    );
  }
}

export default App;
