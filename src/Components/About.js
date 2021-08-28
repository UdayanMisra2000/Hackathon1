import React from 'react'
import './About.css'
import { Col, Row, Container, Card } from 'react-bootstrap'

export default function About() {
    return (
        <div>
        <div class="about-section">
    <div class="inner-container">
      <h1>About Us</h1>
      <p class="text">
        CEO--- Udayan Misra 
        <Container>
  <Row>
        <Col xs={6} md={4}>
  <h2>
    Fly like a Rocket with Blue Moon.
  </h2> 
  </Col>  
  </Row>
  <Row><Card bg= "secondary" style={{ width: '18rem' }}>
  <Card.Body> Created by Udayan Misra.</Card.Body>
  </Card>
  </Row>
  </Container> 
      </p>
    </div>
  </div>
    </div>
    )
}
