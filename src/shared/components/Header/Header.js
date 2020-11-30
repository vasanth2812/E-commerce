import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { allcartProducts } from '../../../reducers/cartProducts';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const stateProductList = useSelector((state) => allcartProducts(state));
  useEffect(() => {
    const productCount = stateProductList ? stateProductList.length : 0;
    setCount(productCount);
  }, [stateProductList]);

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
              <NavItem className="cart-product-count">
                <NavLink href="/cart">
                  <span className="cart-bubble">
                    <span>{count}</span>
                  </span>
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
