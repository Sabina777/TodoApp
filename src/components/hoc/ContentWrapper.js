import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const ContentWrapper = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center py-3">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default ContentWrapper;
