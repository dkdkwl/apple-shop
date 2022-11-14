import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import {Routes,Route,Link} from 'react-router-dom'

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


      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route path='/'element={
          <div>
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
        }>
        </Route>
        <Route path='/detail'element={
          <Product></Product>
        }></Route>
      </Routes>


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

function Product(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
} 

export default App;
