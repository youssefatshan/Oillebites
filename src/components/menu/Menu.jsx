import { React, useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { menuItems } from '../../assets/data/products.js'
import './Menu.css'

const Menu = () => {

    const [hovered, setHovered] = useState(false);

    const menuEl = useRef(null);
    
    useEffect(() => {
        if (menuEl.current) {
        menuEl.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [menuEl]);

  return (
    <Container id="menu" ref={menuEl}>
      <Row>
        {menuItems.map((item) => (
        <Col sm="3" className="my-3">
        <Card key={item.id} 
              style={{ backgroundColor: '#141124' }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(false)}
              className={`card ${hovered === item.id ? 'hovered' : ''}`}
            >
            <CardImg top width="100%" src={item.image} alt={item.name} />
            <CardBody>
                <Row>
                    <Col xs="6">
                        <CardTitle className="text-white font-weight-bold">{item.name}</CardTitle>
                    </Col>
                        <Col xs="6" className="text-right">
                        <CardTitle className="text-white font-weight-bold">Price: {item.price}</CardTitle>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <CardText>ID: {item.id}</CardText>
                    </Col>
                        <Col xs="6" className="text-right">
                        <CardText>Rating: {item.rating}/5</CardText>
                    </Col>
                </Row>
                <Button className="d-flex align-items-center mx-auto">
                    <i className="ri-shopping-cart-line mr-2 p-2"></i>
                    Add to Cart
                </Button>  
            </CardBody>
        </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;