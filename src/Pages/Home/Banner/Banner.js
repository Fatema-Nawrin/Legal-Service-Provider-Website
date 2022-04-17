import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../../Images/law3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <Container>
            <Row className='gx-0 mt-4'>
                <Col xs={12} md={6}>
                    <img src={banner1} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='banner pt-lg-5 ps-4 ps-lg-5'>
                        <p className='fw-bold fs-1 pt-4'>ASHLEY GRAY</p>
                        <p className='fs-lg-5 pe-lg-4 pb-lg-4'>An employment and human rights lawyer for solving your problem at work</p>
                        <p className='pt-lg-4 fs-5'>She believes in</p>
                        <p className='fs-4 fw-bold'>Respect, Reputation and Result</p>
                    </div>
                </Col>
            </Row>
        </Container>);
};

export default Banner;