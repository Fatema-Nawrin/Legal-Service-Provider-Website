import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from './CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar className='mt-4' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{ color: 'rgb(25, 100, 130)' }} className='fs-1 fw-bolder' href="/">ASHLEY GRAY  <span style={{ color: 'salmon' }}>LAW</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto fs-5' >
                            <CustomLink to='/home' className='me-lg-5' >HOME</CustomLink>
                            <CustomLink to='/checkout' className='me-lg-5' >CHECKOUT</CustomLink>

                            {
                                user ?
                                    <CustomLink to='/login' className='me-5'> <button className='signout-btn' onClick={handleSignOut}>SIGN OUT</button> </CustomLink>
                                    :
                                    <CustomLink to='/login' className='me-5' >LOGIN</CustomLink>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;