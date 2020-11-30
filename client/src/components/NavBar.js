import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">HAMMER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Tickets">Tickets</NavLink>              
            </NavItem>
            <NavItem>
              <NavLink href="/Customers">Customers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Materials">Materials</NavLink>
            </NavItem>
          </Nav>
          <NavbarText >Nathan Huber</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;