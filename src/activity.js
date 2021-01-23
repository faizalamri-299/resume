import React from 'react';
import { Card,CardColumns } from 'react-bootstrap';

import Gambargitar from './assets/photo6127343779657656650.jpg';
import Gambarpencipta from './assets/photo6084596275103246837.jpg';
import Gambartrekking from './assets/EYRT1501.JPG';
import Gambarfsktm from './assets/IMG_4606.JPG';
import Gambarcanva from './assets/photo6077804823706709026.jpg';
import Gambarsrm from './assets/photo6077804823706709023.jpg';


export const activity = () => (
<>
<br></br>
<CardColumns>
  <Card>
    <Card.Img variant="top" src={Gambargitar} width="500" alt="logo" />
    <Card.Body>
      <Card.Title>Keroncong Performance at Parit Simpan, Batu Pahat</Card.Title>
      <Card.Text>
        This is a activity organized by Keroncong Club UTHM and i was the guitarist to do a performance at the Kampung Parit Simpan, Batu Pahat.
      </Card.Text>
    </Card.Body>
  </Card>
    {/* ending gambar 1 */}

  <Card>
    <Card.Img variant="top" src={Gambarpencipta} width="500" alt="logo" />
    <Card.Body>
      <Card.Title>PENCIPTA '19</Card.Title>
      <Card.Text>
        PENCIPTA is a biannual program organised by the Ministy of Higher Education Malaysia to showcase innovative products.
      </Card.Text>
    </Card.Body>
  </Card>
  {/* ending gambar 2 */}

  <Card>
    <Card.Img variant="top" src={Gambartrekking} width="500" alt="logo" />
    <Card.Body>
      <Card.Title>UTHM Trekking Club</Card.Title>
      <Card.Text>
      i have join the trekking club UTHM and joined the event 3 nights 2 days camping at Gunung Ledang. 
      </Card.Text>
    </Card.Body>
  </Card>
  {/* ending gambar 3 */}

  <Card>
    <Card.Img variant="top" src={Gambarfsktm} width="500" alt="logo" />
    <Card.Body>
      <Card.Title>FSKTM Sports Day</Card.Title>
      <Card.Text>
        My faculty once held a sports event and me and my friends are actively participating in those activity.
      </Card.Text>
    </Card.Body>
  </Card>
  {/* ending gambar 4 */}

  <Card>
    <Card.Img variant="top" src={Gambarcanva} width="500" alt="logo" />
    <Card.Body>
      <Card.Title>FSKTM Program with SK Seri Manggis</Card.Title>
      <Card.Text>
        This event is been held between SK Seri Manggis and my faculty in order to gave the primary schools student early exposure on university's life.
      </Card.Text>
    </Card.Body>
  </Card>
  {/* ending gambar 5 */}

  <Card>
    <Card.Img variant="top" src={Gambarsrm} width="500" alt="logo" />
    <Card.Body>
      <Card.Title>SRM Cares : Run Smash The Stigma</Card.Title>
      <Card.Text>
        This is a charity event in conjunction with Carbon Free Day Organised by Sekretriat Rakan Muda UTHM. i was one of the commitee members.
      </Card.Text>
    </Card.Body>
  </Card>
  {/* ending gambar 6 */}
</CardColumns>  
</> 
)