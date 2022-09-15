import { logDOM } from "@testing-library/react";
import React from "react";
import {Navbar, Container, NavDropdown, Collapse, Nav} from 'react-bootstrap';
import "./Nav.css"
import logo from '../../assests/logo.png'
import {AiOutlineRight} from "react-icons/ai"
import {VscSearch} from "react-icons/vsc"
const Navbars = ()=>{
  return(
  <Navbar  expand="lg">
      <Container className="test">
        <Navbar.Brand href="#home">
          <img src={logo} title = "logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="active">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Login / Register</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Service Detail</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Contact Us</Nav.Link>
            <Nav.Link href="#home"><VscSearch className="search"/></Nav.Link>
            <Nav.Link href="#home"><button>Contact Us <span> <AiOutlineRight/> </span></button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navbars;