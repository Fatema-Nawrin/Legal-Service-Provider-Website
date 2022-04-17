import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from './CustomLink';
import './Header.css'

const Header = () => {
    return (
        <header>
            <Navbar className='mt-4' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{ color: 'rgb(25, 100, 130)' }} className='fs-1 fw-bolder' href="/">ASHLEY GRAY LAW</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto fs-5' >
                            <CustomLink to='/home' className='me-5' >HOME</CustomLink>
                            <CustomLink to='/checkout' className='me-5' >CHECKOUT</CustomLink>
                            <CustomLink to='/blog' className='me-5' >BLOG</CustomLink>
                            <CustomLink to='/about' className='me-5' >ABOUT</CustomLink>
                            <CustomLink to='/login' className='me-5' >LOGIN</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;