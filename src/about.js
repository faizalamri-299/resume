import React from 'react';
import { Media } from 'react-bootstrap';
import './App.css';
import Gambar from './assets/photo6165545447876307106.jpg';
import Gambargitar from './assets/photo6077804823706709040.jpg';
import Gambarfamily from './assets/photo6077804823706709039.jpg';



export const about = () => (
<>
<br></br>
  <Media>
    <img
      width={500}
      height={500}
      className="align-self-start mr-3"
      src={Gambar}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>About Myself</h5>
      <p>
        My name is Faizal Amri Bin Abd Manan. I was born at Kuala Terengganu in December 6th, 1997. I am 24 years old. I am a graduate
        student from Universiti Tun Hussien Onn Malaysia in Bachelowdsdfsdr Degree of Information Technology and also a diploma holder in Information Technology.
      </p>
    </Media.Body>
  </Media>
  <hr></hr>
  <Media>  
    <Media.Body>
      <h5>My Family</h5>
      <p>
        In my family, i am the youngest. I have two siblings. A brother and A sister. My family is my everything.
      </p>
    </Media.Body>
    <img
      width={500}
      height={500}
      className="align-self-start mr-3"
      src={Gambarfamily}
      alt="Generic placeholder"
    />
  </Media>
  <hr></hr>
  <Media>
  <img
      width={500}
      height={500}
      className="align-self-start mr-3"
      src={Gambargitar}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Hobbies</h5>
      <p>
      I like to play guitar but i am just a mediocre guitar player. I also love working out. It makes me feel more motivated and focused. It also keeps me maintaining my health.
      </p>
    </Media.Body>
  </Media>
</>
)