import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "animate.css";
import disneyland from "../Assets/disenyland.jpeg";
import disneyworld from "../Assets/disneyworld.jpeg";
import paris from "../Assets/paris.jpeg";
import tokyo from "../Assets/tokyo.jpeg";
import hongkong from "../Assets/hongkong.jpeg";
import shanghai from "../Assets/shanghai.jpeg";

export default function ThemeParkComponent() {
  return (
    <div>
      <Container className="influence mt-5 animate__animated animate__">
        <Row>
          <Col className="d-flex justify-content-center pt-3">
            <h1>
              <strong>Disney Parks</strong>
              <hr />
            </h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="p-5">
            <h3>
              Disneyland Resort, California
              <br /> <br />
              <a
                href="https://disneyland.disney.go.com/"
                rel="noreferrer"
                target="_blank"
              >
                Check Out Disneyland
              </a>
            </h3>
          </Col>
          <Col className="p-5">
            <img
              className="disneyImgTheme animate__animated animate__bounceInRight"
              src={disneyland}
              alt="Drawing of Walt Disney"
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="p-5">
            <img
              className="disneyImgTheme animate__animated animate__bounceInLeft"
              src={disneyworld}
              alt="Walt Disney"
            />
          </Col>
          <Col className="p-5">
            <h3>
              Walt Disney World Resort World, Florida
              <br /> <br />
              <a
                href="https://disneyworld.disney.go.com/"
                rel="noreferrer"
                target="_blank"
              >
                Check Out Disney World
              </a>
            </h3>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="p-5">
            <h3>
              Disneyland Paris
              <br /> <br />
              <a
                href="https://disneyparks.disney.go.com/"
                rel="noreferrer"
                target="_blank"
              >
                Check Out Disneyland Paris
              </a>
            </h3>
          </Col>
          <Col className="p-5">
            <img
              className="disneyImgTheme animate__animated animate__bounceInRight"
              src={paris}
              alt="Drawing of Walt Disney"
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="p-5">
            <img
              className="disneyImgTheme animate__animated animate__bounceInLeft"
              src={tokyo}
              alt="Walt Disney"
            />
          </Col>
          <Col className="p-5">
            <h3>
              Tokyo Disney Resort
              <br /> <br />
              <a
                href="https://www.tokyodisneyresort.jp/en/index.html"
                rel="noreferrer"
                target="_blank"
              >
                Check Out Tokyo Disney Resort
              </a>
            </h3>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="p-5">
            <h3>
              Hong Kong Disneyland Resort
              <br /> <br />
              <a
                href="https://www.hongkongdisneyland.com/?located=true"
                rel="noreferrer"
                target="_blank"
              >
                Check Out Hong Kong Disneyland Resort
              </a>
            </h3>
          </Col>
          <Col className="p-5">
            <img
              className="disneyImgTheme animate__animated animate__bounceInRight"
              src={hongkong}
              alt="Drawing of Walt Disney"
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="p-5">
            <img
              className="disneyImgTheme animate__animated animate__bounceInLeft"
              src={shanghai}
              alt="Walt Disney"
            />
          </Col>
          <Col className="p-5">
            <h3>
              Shanghai Disney Resort
              <br /> <br />
              <a
                href="https://disneyparks.disney.go.com/"
                rel="noreferrer"
                target="_blank"
              >
                Check Out Shanghai Disney Resort
              </a>
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
