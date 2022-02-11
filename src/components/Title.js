// Scott Morenzone
// 2/11/22
//Influential Person Project
//Multipage site on a person that has been influential to me, responsive

import React from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import DisneyStatue from "../Assets/DisneyStatue.jpg";
import waltdisney from "../Assets/waltdisney.jpeg";
import disneywmickey from "../Assets/disneywmickey.jpeg";
import influenceimg from "../Assets/influenceimg.png";
import "animate.css";

export default function Title() {
  return (
    <div>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <h1 className="animate__animated animate__swing">
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
      <Container className=" influence">
        <Row className="mt-5">
          <Col className="d-flex justify-content-center pt-3">
            <h1>
              <strong>Influence</strong> <hr />
            </h1>
          </Col>
        </Row>
        <Row className="mt-5 mb-3">
          <Col className="p-5">
            <h4>
              Growing up Walt Disney was and still is so influential in my life.
              His influence on me started when I was just a kid watching Disney
              movies, like Snow White, Pinocchio, Hercules, and The Lion King.
              He created a family friendly amusement park, Disneyland, the
              happiest place on Earth. Most importantly Walt Disney influenced
              me and many others to use our imagination and to try to do the
              impossible. Disney worked hard for what he wanted, and he never
              lost sight of what truly mattered to him. He not only believed in
              himself, but he believed that everyone had the potential in
              achieving great things. Disney also taught me to never give up on
              my dreams, Disney started multiple businesses that failed. Then he
              and his brother, Roy, started the Disney Brothers Studio that
              later became the company known as The Walt Disney Company. Walt
              Disney and his team created all the work that defined my
              childhood. Whether it was watching Disney movies or spending a few
              days at Disneyland, there is no doubt that Walt Disney has had a
              huge influence on my life.
            </h4>
          </Col>
          <Col className="p-5">
            <img
              className="disneyImgTheme"
              src={influenceimg}
              alt="Walt Disney"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
