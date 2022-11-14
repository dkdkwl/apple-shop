import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App(){

  let [shoes] = useState(data);

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          {
            shoes.map(function(a,i){
              return(
                <Card shoes={shoes[i]} key = {i}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Card(props){
  return(
  <div className="col-md-4" >
    <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="80%" />
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
    <p>{props.shoes.price}</p>
  </div>
  )
}

export default App;
