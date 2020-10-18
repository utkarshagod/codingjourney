import React from 'react';
// import {Link} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './comp/pages/Home';
import About from './comp/pages/About';
import BookingSeat from './comp/pages/BookingSeat';
import SelectedPeople from './comp/pages/SelectedPeople.js';
import AdviceLocation from './comp/pages/AdviceLocation';
import upcomingEvent from './comp/pages/upcomingEvent';
import { BrowserRouter as Router, Route,NavLink } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import {Navbar, Nav} from 'react-bootstrap';


function App() {
  return (

    

    <Router>
    <div className="App">
      <Navbar/> 
      
        
       
      <div className="">
     
   
     
      

      


       <div className="god">
          {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>  
           */}
          
           

          

        
          
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     
        
      <Navbar fixed="top" collapseOnSelect expand="lg"  bg="dark"  variant="dark">
   {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>  */}
   <NavLink exact activeClassName="active" to="/">Home</NavLink>  

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
      
      <NavLink exact activeClassName="active" to ="/SelectedPeople">Selected People List</NavLink> 
      <NavLink exact activeClassName="active" to="/about">About</NavLink>
      <NavLink exact activeClassName="active" to="/BookingSeat">Booking Seat</NavLink>

      {/* <NavDropdown title="About us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Contact Us">Contact Us</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        {/* </NavDropdown> */}

        {/* <NavDropdown title="Choose Location" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">Hadpsar</NavDropdown.Item>
        <NavDropdown.Item href="">Gondhalenagar</NavDropdown.Item>
        <NavDropdown.Item href="">Satawadi</NavDropdown.Item>
        <NavDropdown.Item href="">Indraprasta</NavDropdown.Item>
        
        

        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

      
      {/* </NavDropdown> */} 
      
    </Nav>
    
      
    <Nav>
    <div className="de">
      
      <NavLink to="/AdviceLocation">Advice Location</NavLink>
      {/* <Nav.Link eventKey={2} href="#memes"></Nav.Link>
     Upcoming Events */}
     <NavLink to="/upcomingEvent ">Upcoming Events</NavLink>
     </div>
    </Nav>
    
    
    
  </Navbar.Collapse>
</Navbar>
</Navbar>
</div>


</div>
 


 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/SelectedPeople" component={SelectedPeople} />
          <Route exact path="/AdviceLocation" component={AdviceLocation}/>
          <Route exat path="/upcomingEvent" component={upcomingEvent }/>
          <Route exat path="/BookingSeat" component={BookingSeat }/>

        </Switch> 

        
       
        



        
   
  
 
  {/* <Jumbotron>
      
   </Jumbotron> 
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      src="https://businessfirstfamily.com/wp-content/uploads/2016/12/social-work-business.jpeg"
      alt="First slide"
      width="600"  height="400" 
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.collegescholarships.org/images/social-worker-scholarships.jpg"
      alt="Third slide"
      width="600"  height="400" 
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.naswe.org/gallery/inspirational-social-worker-quotes/inspirational-social-worker-quotes.jpg"
      alt="Third slide"
      width="600"  height="400" 
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        */}
          
          
</div>
    </Router> 
   
    
    
    
    
     
  );
}

export default App; 
