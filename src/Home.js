import React from 'react';
import { Jumbotron, Container, Image, ProgressBar } from 'react-bootstrap';
import './App.css';
import Gambar from './assets/aset.jpg';

export const Home = () => (
<> 
    <br></br>
    <Jumbotron fluid>
    <Container>
        <h1>My Web Resume</h1>
        <p>
        Hi, My name is Faizal Amri, And this is my web resume.
        </p>
    </Container>
    </Jumbotron>
    <Image src={Gambar} fluid />
</>
)