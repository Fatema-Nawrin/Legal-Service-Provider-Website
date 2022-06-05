import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../../Images/law3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <Container>
            <Row className='gx-0 mt-4'>
                <Col className='banner-img' xs={12} md={6}>
                    <img src={banner1} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='banner pb-4 pt-2 pt-md-5 ps-3 ps-md-5 pe-2'>
                        <p className='fw-bold fs-1 pt-2 pt-md-4 banner-heading mb-1'>ASHLEY GRAY</p>
                        <p className='pe-sm-4 pb-md-4 text-black-50 fw-bold'>An employment and human rights lawyer for solving your problem at workplace</p>
                        <p className='pt-sm-4 fw-bold mb-1 text-black-50'>She believes in</p>
                        <p className='fs-2 pb-2 slide-text'>Respect, Reputation &amp; Result</p>
                        <button className='banner-btn text-uppercase'>Learn more <FontAwesomeIcon icon={faBalanceScale}></FontAwesomeIcon></button>
                    </div>
                </Col>
            </Row>
        </Container>);
};

export default Banner;