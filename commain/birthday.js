import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col xs={4}>
          <Card style={{ width: '100%', marginBottom: '50px', marginLeft: '30px', marginRight: '30px' }}>
            <Card.Img variant="top" src="https://imgmedia.lbb.in/media/2020/07/5efd8af28c822655f761125c_1593674482169.jpg" height="300px" width="100%" />
            <Card.Body>              
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          {/* Second Card with different image */}
          <Card style={{ width: '100%', marginBottom: '50px', marginLeft: '40px', marginRight: '40px' }}>
            <Card.Img variant="top" src="https://imgmedia.lbb.in/media/2020/07/5efd8af28c822655f761125c_1593674482169.jpg" height="300px" width="100%" />
            <Card.Body>
              
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          {/* Third Card with different image */}
          <Card style={{ width: '100%', marginBottom: '50px', marginLeft: '50px', marginRight: '50px' }}>
            <Card.Img variant="top" src="https://imgmedia.lbb.in/media/2020/07/5efd8af28c822655f761125c_1593674482169.jpg" height="300px" width="100%" />
            <Card.Body>
              
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
