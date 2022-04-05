import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap"; 
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import ImageSlider from "./components/Slider";
import "./css/App.css"



function App() {
  return (
    <div className='App'>

      <div className='Navbar'>
       <ReactBootStrap.Navbar bg="dark" expand="lg">
  <Container fluid >
    <ReactBootStrap.Navbar.Brand href="#" style={{color: "white"}}><img className="prime" src="data:image/jpeg;base64,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"/></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
    <ReactBootStrap.Navbar.Collapse id="navbarScroll">
    <ReactBootStrap.Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <ReactBootStrap.Nav.Link href="#action1" style={{color: "white"}}>Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#action2" style={{color: "white"}}>TV Shows</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#" disabled  style={{color: "white"}}>
          Movies
        </ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Categories" id="navbarScrollingDropdown">
          <ReactBootStrap.NavDropdown.Item href="#action3">Movie</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action4">Kids</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action5">
            TV
          </ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
       
      </ReactBootStrap.Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </ReactBootStrap.Navbar.Collapse>
  </Container>
</ReactBootStrap.Navbar>
</div>

<div className='Carousel'>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assetscdn1.paytm.com/images/cinema/The-Kashmir-Files--_1035x420-ad439290-9e28-11ec-b2f1-c7bae61834cc.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Watch Now</h3>
      <p>(Hindi)</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assetscdn1.paytm.com/images/cinema/RRR-north-1035x420-29871450-693e-11ec-bbcd-5d122dc4018b.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Watch Now</h3>
      <p>(Telugu)</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.toiimg.com/photo/68949665.jpeg"
      alt="Third slide"
    />
   <Carousel.Caption>
      <h3>Watch Now</h3>
      <p>(English)</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<div className="container mt-5 carousel">
      <ImageSlider />
    </div> 









   </div>
  )
}






export default App;
