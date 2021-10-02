import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
 
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Test</Navbar.Brand>
          </LinkContainer>
          
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
