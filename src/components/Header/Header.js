import React from "react";
import Logo from "./logo.png"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
<Navbar bg="dark" expand="md">
  <Container>
      <img className="d-inline-block align-text-top fs-1 p-2" src={Logo} alt="calendar icon" width="65px" height="65px"></img>
    <Navbar.Brand className="text-white" fs="1" p="2" href="#home" >Plan My Life</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header