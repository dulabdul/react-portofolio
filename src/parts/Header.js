import React, { useState } from 'react';
import Button from '../elements/Button';
import BrandText from './BrandText';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Hero from './Hero';
export default function Header() {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  return (
    <header>
      <Navbar
        className='topnav'
        collapseOnSelect
        expand='lg'
        bg='transparent'
        variant='transparent'
      >
        <Container>
          <Navbar.Brand>
            <BrandText />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <li className='nav-item'>
                <Button
                  className={`nav-link ${getNavLinkClass('/')}`}
                  href='/'
                  type='link'
                >
                  Home
                </Button>
              </li>
              <li className='nav-item'>
                {' '}
                <Button
                  className={`nav-link ${getNavLinkClass('/project')}`}
                  href='/project'
                  type='link'
                >
                  Project
                </Button>
              </li>
              <li className='nav-item'>
                {' '}
                <Button
                  className={`nav-link ${getNavLinkClass('/certificate')}`}
                  href='/certificate'
                  type='link'
                >
                  Certificate
                </Button>
              </li>
              <li className='nav-item'>
                {' '}
                <Button
                  className={`nav-link ${getNavLinkClass('/contact')}`}
                  href='/contact'
                  type='link'
                >
                  Contact
                </Button>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
    </header>
  );
}
