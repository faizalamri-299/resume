import React from 'react'
import { Container, Row, Col, Carousel} from 'react-bootstrap';
import yii2 from './assets/yii2.png';
import php from './assets/php.png';
import sql from './assets/sql.png';
import python from './assets/python.jpg';
import java from './assets/java.png';
import js from './assets/js.png';
import vb from './assets/vb.jpg';
import ps from './assets/ps.png';
import pr from './assets/pr.png';
import repair from './assets/repair.jpg';

import ss1 from './assets/ss1.jpg';
import ss2 from './assets/ss2.jpg';
import ss3 from './assets/ss3.jpg';
import ss4 from './assets/ss4.jpg';
import ss5 from './assets/ss5.jpg';
import ss6 from './assets/ss6.jpg';


export const background = () => (
    <>
    <br></br>
    <Container>
        <h3>Educational Background</h3>
        <hr></hr>
        <h4>Universiti Tun Hussien Onn Malaysia</h4>
        <br></br>
    <Row>
        <Col md={6}><h5>Bachelor Degree of Information Technology</h5></Col>
        <Col md={{ span: 2, offset: 2 }}>CGPA : 3.42</Col> 
    </Row>
    <Row>
        <Col><b>Intership</b> : Web Developer Intern At <b>Bit Extreme Infotech Sdn Bhd</b> (Aug 2020 - Jan 2021)<br></br>
        -Developed and designed a web site using Yii2 framework<br></br>
        -Designing database tables and structures using MySQL<br></br>
        -Implemented Javascript in front-end web for dynamic and interactive website<br></br>
        </Col>
    </Row><br></br>
    <Row>
        <Col><b>Final Year Project</b> : Web-Based Elder Fall Detection Using Raspberry Pi</Col>
    </Row>
    <br></br>
    <Row>
        <Col md={6}><h5>Diploma in Information Technology</h5></Col>
        <Col md={{ span: 2, offset: 2 }}>CGPA : 3.02</Col>
    </Row>
    <Row>
        <Col><b>Intership</b> : IT Technician Intern  At <b>Kulai Municipal Council (MPKu)</b> (Sept 2017 - Jan 2018)<br></br>
        -Stored, retrieved, and manage data<br></br>
        -Diagnose, repair and maintain hardware and software<br></br>
        -Installing and configuring computer hardware and software<br></br></Col>
    </Row><br></br>
    <Row>
        <Col><b>Final Year Project</b> : Photography Reservation Web-Based System</Col>
    </Row>
    </Container>
    
    <hr></hr>
    <div>
        <h2>Skills</h2>
        <br></br>
        <Container>
        <Row>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={yii2} alt="Generic placeholder"/>Yii2 Framework</Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={php} alt="Generic placeholder"/>PHP </Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={sql} alt="Generic placeholder"/>MySQL</Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={python} alt="Generic placeholder"/>Python</Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={java} alt="Generic placeholder"/>Java </Col>
        </Row><br></br>
        <Row>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={js} alt="Generic placeholder"/>Javascript </Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={vb} alt="Generic placeholder"/>VB.Net </Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={ps} alt="Generic placeholder"/>Photoshop</Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={pr} alt="Generic placeholder"/>Premier Pro</Col>
            <Col><img width={64} height={64} className="align-self-start mr-3"
                src={repair} alt="Generic placeholder"/>Technical Skills</Col>
        </Row>
        </Container><hr></hr>

        <h2>Latest Project</h2>
        <p>During my internship, i am assigned to do one of the modul in the Tunku Laksamana Johor Cancer Foundation System by my company. This is a web-based system and build using Yii2 Framework and MySQL.
            The modul that i hace charged to is the Internal Service Modul. This modul consist from a Tunku Laksamana Johor Cancer Foundation workers detail registration, application for a leave, application for allowance and a digital document management.
        </p>
        <Carousel>
            <Carousel.Item>
                <img
                width={1268} height={597}
                className="d-block w-100"
                src={ss1}
                alt="First slide"
                />
                <Carousel.Caption>
                <p>Example form for workers registration</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                width={1268} height={597}
                className="d-block w-100"
                src={ss2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>The list of all workers that been registered</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                width={1268} height={597}
                className="d-block w-100"
                src={ss3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>Example of the workers profile that been registered</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                width={1268} height={597}
                className="d-block w-100"
                src={ss4}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>Example of form to apply vehicle allowance. The amount of allowance is auto-calculated from their distance travelled.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                width={1268} height={597}
                className="d-block w-100"
                src={ss5}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>List of the allowance that been applied with the status.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                width={1268} height={597}
                className="d-block w-100"
                src={ss6}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>example view form the allowance application that been made.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
    </div>
    </>
)