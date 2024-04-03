import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = { isOpenMenu: false };

  handleNavIcon = () => this.setState({ isOpenMenu: !this.state.isOpenMenu });

  render() {
    return (
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="brand">
            ADMIN
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={this.handleNavIcon}
          >
            <FaAlignRight className="nav-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={this.state.isOpenMenu ? "mr-auto show-nav" : "mr-auto"}>
              <Nav.Link as={NavLink} to="/" onClick={this.handleNavIcon}>
                Rooms
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Bookings" onClick={this.handleNavIcon}>
                Bookings
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
