import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from './Form';
import './Home.css';

export default function Home() {
  return (
    <Container>
      <h1>Home Page</h1>
      <p>Welcome home!</p>
      <Row>
        <Col sm={6}>
          <div className="form-container">
            <Form />
          </div>
        </Col>
      </Row>
    </Container>
  );
}




