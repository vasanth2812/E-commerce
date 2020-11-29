import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClipboard } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">VkDev</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Nav>
              <NavItem>
                <NavLink href="/Whishlist">
                  <FontAwesomeIcon icon={faClipboard} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </NavLink>
              </NavItem>
            </Nav>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
