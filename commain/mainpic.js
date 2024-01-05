import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample2() {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col xs={4}>
          <Card style={{ width: '100%', marginBottom: '50px', marginLeft: '30px', marginRight: '30px' }}>
            <Card.Img variant="top" src="https://homafy.com/wp-content/uploads/2021/09/Personalised-gifts-combo-and-box-min.jpg" height="300px" width="100%" />
            <Card.Body>              
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          {/* Second Card with different image */}
          <Card style={{ width: '100%', marginBottom: '50px', marginLeft: '40px', marginRight: '40px' }}>
            <Card.Img variant="top" src="https://www.gifts-to-india.com/images/MSCSUUN1006-VA_big.webp" height="300px" width="100%" />
            <Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          {/* Third Card with different image */}
          <Card style={{ width: '100%', marginBottom: '50px', marginLeft: '50px', marginRight: '50px' }}>
            <Card.Img variant="top" src="https://giftcart.com/cdn/shop/products/5_mb_in_one_tube-7_700x.webp?v=1661068183" height="300px" width="100%" />
            <Card.Body>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample2;
