import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor:'#fae7b5'}} light expand="md" >
        <Link to="/" className="navbar-brand">
          Movies Zone
        </Link>
        <NavbarToggler onClick={toggle} style={{backgroundColor:'tomato'}}/>
        <Collapse isOpen={isOpen} navbar style={{backgroundColor:'#fae7b0'}}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/add-movie">Add Movies</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Keep Learning</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
