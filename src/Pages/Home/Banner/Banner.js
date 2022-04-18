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
                    <div className='banner pt-2 pt-md-5 ps-3 ps-md-5 pe-2'>
                        <p className='fw-bold fs-1 pt-2 pt-md-4'>ASHLEY GRAY</p>
                        <p className='pe-sm-4 pb-md-4'>An employment and human rights lawyer for solving your problem at work</p>
                        <p className='pt-sm-4 fs-5'>She believes in</p>
                        <p className='fs-3 fw-bold pb-3'>Respect, Reputation and Result</p>
                    </div>
                </Col>
            </Row>
        </Container>);
};

export default Banner;