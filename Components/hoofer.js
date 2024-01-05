import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PrintOfferCards() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <Card style={{ width: '95%', marginBottom: '50px', marginLeft: '30px', marginRight: '30px' }}>
            <Card.Img variant="top" src="https://img.freepik.com/premium-vector/gift-boxes-packages-with-purchases-christmas-new-year-concept-special-offer-sales-shopping-sale-new-year-christmas-buying-gifts-illustration-advertising-signs_436767-487.jpg?w=2000" height="300px" width="50%" />
            <Card.Body>              
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          {/* Second Card with different image */}
          <Card style={{ width: '80%', marginBottom: '50px', marginLeft: '40px', marginRight: '40px' }}>
            <Card.Img variant="top" src="https://img.freepik.com/premium-vector/christmas-sale-with-pine-tree-gifts-spheres-snowman-design-christmas-offer-theme_24877-68700.jpg" height="300px" width="100%" />
            <Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          {/* Third Card with different image */}
          <Card style={{ width: '90%', marginBottom: '50px', marginLeft: '50px', marginRight: '50px' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKy8P6eM_HvieSpmTV9-JFiYHvoGRd5xhXw&usqp=CAU" height="300px" width="50%" />
            <Card.Body>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PrintOfferCards;
