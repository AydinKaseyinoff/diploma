import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Deliver() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Delivery Information</h1>
          <p>Here you can find information about our delivery options and policies.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Delivery Options</h2>
          <ul>
            <li>Standard Delivery - 3-5 business days</li>
            <li>Express Delivery - 1-2 business days</li>
            <li>International Delivery - 7-14 business days</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Delivery Policy</h2>
          <p>We strive to deliver your order in a timely and efficient manner. If there are any issues with your delivery, please contact our customer service team.</p>
        </Col>
      </Row>
    </Container>
  );
}
