import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  return (
    <Container>
      <h1>Trail Blazer - Minnesota's Premiere Hiking App</h1>
      <p>Are you an outdoors lover looking for the best hiking trails in Minnesota? Look no further! <br></br>
        Our app is designed with adventurers like you in mind. <br></br>Whether you enjoy hiking, 
        biking, trail running, or exploring other outdoor activities, we've got you covered.</p>
      <Row>
        <Col sm={6}>
          <div className="form-container">
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}




