import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <Container className="my-5 pt-2 pb-1 au-container" id='aboutUs'>
      {/* Creating a row to center the title */}
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="text-center">
          <h2>About Us</h2>
        </Col>
      </Row>

      {/* Creating another row for the two cards */}
      <Row className="my-5">
        {/* First Column for the first card */}
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <Card className='au-card'>
            <CardBody className='au-cardText'>
              <CardTitle className='au-cardTitle'>Our Story</CardTitle>
              <CardText>
                We are a family owned fast food chain that has been serving delicious food for over 20 years. We take pride in using only the freshest ingredients and providing exceptional customer service. Our menu features a variety of classic Western dishes, including burgers, fried chicken, hotdogs and shakes.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        {/* Second Column for the second card */}
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <Card className='au-card'>
            <CardBody className='au-cardText'>
              <CardTitle className='au-cardTitle'>Our Mission</CardTitle>
              <CardText>
                Our mission is to provide our customers with high-quality food, fast service, and a clean and welcoming environment. We strive to be a positive force in the communities we serve and to make a difference in the lives of our customers, employees, and franchisees.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;