import React, { useState, useEffect } from 'react';
import Button from '../elements/Button';
import BrandText from './BrandText';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function Header({
  projectRef,
  certRef,
  hideNavRef,
  contacsRef,
}) {
  const [navScroll, setNavScrolled] = useState(null);
  const listenScrollEvent = () => {
    window.scrollY > 50 ? setNavScrolled('scrolled') : setNavScrolled('');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  });
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  return (
    <Navbar
      className={`topnav fixed-top ${navScroll}`}
      collapseOnSelect
      expand='lg'
      bg='transparent'
      variant='transparent'
      id='nav-area'
      ref={hideNavRef}
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
                type='link'
                className={`nav-link ${getNavLinkClass('/')}`}
                href='/'
              >
                Home
              </Button>
            </li>
            <li className='nav-item'>
              {' '}
              <Button
                className={`nav-link ${getNavLinkClass('/project')}`}
                onClick={() => {
                  handlerScroll(projectRef.current);
                }}
                type='button'
              >
                Project
              </Button>
            </li>
            <li className='nav-item'>
              {' '}
              <Button
                type='button'
                onClick={() => {
                  handlerScroll(certRef.current);
                }}
                className={`nav-link ${getNavLinkClass('/certificate')}`}
              >
                Certificate
              </Button>
            </li>
            <li className='nav-item'>
              {' '}
              <Button
                type='button'
                onClick={() => {
                  handlerScroll(contacsRef.current);
                }}
                className={`nav-link ${getNavLinkClass('/contact')}`}
              >
                Contact
              </Button>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
