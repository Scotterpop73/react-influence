import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import disneydrawing2 from "../Assets/disneydrawing2.jpeg";
import disneycoloredmickey from "../Assets/disneycoloredmickey.jpeg";
import "animate.css";

export default function AboutComponent() {
  return (
    <div>
      <Container className="influence mt-5 animate__animated animate__bounceInDown">
        <Row>
          <Col className="d-flex justify-content-center pt-3">
            <h1>
              <strong>About</strong>
              <hr />
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            <h4>
              Born in Chicago on December 5, 1901, Walter Elias Disney was an
              American animator, writer, film producer, and entrepreneur. He was
              a pioneer in the animation industry and he introduced many
              developments in the production of cartoons. The most notable
              character that Disney created was Mickey Mouse in 1928. As a
              child, Disney took art classes and at the age of 18 he got a job as
              a commercial illustrator. By the early 1920s, Disney moved to
              California and with his brother Roy, set up the Disney Brothers
              Studio.
              <br /> <br />
              By the 1950s, Disney had decided to expand into the amusement park
              industry. He opened Disneyland in Anaheim, California in July
              1955. In 1905, Disney had began the development on Disney World,
              however; Disney had died of lung cancer before he could see the
              park completed.
            </h4>
          </Col>
          <Col className="p-5">
            <img
              className="disneyImgAbout"
              src={disneydrawing2}
              alt="Drawing of Walt Disney"
            />
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            <img
              className="disneyImgAbout"
              src={disneycoloredmickey}
              alt="Walt Disney"
            />
          </Col>
          <Col className="p-5">
            <h4>
              Walt Disney is an important figure in the history of animation and
              in the history of the United States. Disney is considered a
              cultural icon. His film work is continued to be shown and adapted
              through his studio and company. The Disney theme parks have also
              continued to grow in size and have expanded to several countries.
              <br /> <br />
              <a
                href="https://www.waltdisney.org/walt-disney"
                rel="noreferrer"
                target="_blank"
              >
                Learn More
              </a>
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
