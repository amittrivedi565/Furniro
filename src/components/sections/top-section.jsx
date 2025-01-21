import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sectionBg from "../../assets/images/section_background.png"

const ShopSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${sectionBg})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative',
      }}
    >
      {/* Overlay content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White overlay with transparency
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container>
          <Row className="text-center">
            <Col>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: 0 }}>Shop</h1>
              <p style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
                <span>Home</span> <span style={{ margin: '0 8px' }}>&gt;</span> <span>Shop</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ShopSection;
