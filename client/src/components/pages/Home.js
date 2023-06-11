import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  return (
    <Container className="content">
      <h1>Trail Blazer - Minnesota's Premiere Hiking App</h1>
      <p>Are you an outdoors lover looking for the best hiking trails in Minnesota? Look no further! <br />
        Our app is designed with adventurers like you in mind.</p>

      <p>Whether you enjoy hiking, biking, trail running, or exploring other outdoor activities, we've got you covered.</p>

      <p>Browse trails or create an account and track the date and distance of your hike. <br />
        Set distance goals and crush your fitness goals. What are you waiting for? Sign</p>
      <Row>
        <Col sm={8}>
          <div className="form-container"></div>
        </Col>
      </Row>
    </Container>
  );
}




