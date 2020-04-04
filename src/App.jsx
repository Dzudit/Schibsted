import React, {Component} from 'react';
import './style.css';
import Container from './contatiners/container.jsx';

class App extends Component {
    render(){
       return(
       <div className="container">
           <Container/>
       </div>
       );
    }
}

export default App;