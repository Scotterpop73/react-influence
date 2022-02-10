import React from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import DisneyStatue from "../Assets/DisneyStatue.jpg";
import waltdisney from "../Assets/waltdisney.jpeg";
import disneywmickey from "../Assets/disneywmickey.jpeg";

export default function Title() {
  return (
    <div>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <h1>
            <strong>Walt Disney</strong>
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="disneyStatue"
                src={DisneyStatue}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="disneyStatue"
                src={waltdisney}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="disneyStatue"
                src={disneywmickey}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container className="influence">
        <Row className="mt-5">
          <Col className="d-flex justify-content-center pt-3">
            <h1><strong>Influence</strong> <hr /></h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="p-5">
            <h4>Lorem ipsum</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
