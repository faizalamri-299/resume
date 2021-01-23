import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover {
        color: white;
    }
}
`
;


export const NavigationBar = () => (
<Styles>
<Navbar expand="lg">
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/background">Education & Experience</Nav.Link>
      <Nav.Link href="/activity">Activity</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Styles>


)