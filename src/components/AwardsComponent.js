import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "animate.css";

import halloffame from "../Assets/halloffame.jpeg";
import nationalaward from "../Assets/nationalaward.jpeg";


export default function AwardsComponent() {
  return (
    <div>
      <Container className="influence mt-5 animate__animated animate__rotateInDownLeft">
        <Row>
          <Col className="d-flex justify-content-center pt-3">
            <h1>
              <strong>Awards</strong>
              <hr />
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            <h4>
              Walt Disney was nominated for 59 (record) Academy Awards and won
              22 (record) those nominations. He was also nominated for 3 Golden
              Globes, he never won any of those nominations. However he has 2
              Special Achievement Awards and the Cecil B. DeMille Award. Disney
              won 1 Emmy Award on 4 nominations. Disney has numerous films in
              the United States National Film Registry by the Library of
              Congress. These films are Steamboat Willie, The Three Little Pigs,
              Snow White and the Seven Dwarfs, Fantasia, Pinocchio, Bambi,
              Dumbo, and Mary Poppins. Snow White and the Seven Dwarfs was
              ranked the 49th Greatest Film on the 100 Greatest Films list by
              the American Film Institute. Fantasia also make the list being
              ranked 58th.
            </h4>
          </Col>
          <Col className="p-5 d-flex justify-content-center">
            <img
              className="disneyImgAbout"
              src={halloffame}
              alt="Walt Disney Statue"
            />
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            <img
              className="disneyImgAbout"
              src={nationalaward}
              alt="Walt Disney"
            />
          </Col>
          <Col className="p-5">
            <h4>
              Disney has 2 stars on the Hollywood Walk of Fame. One for motion
              pictures and the other for his telivision work. Mickey was also
              given his own star for motion pictures. Disney is also in the
              Television Hall of Fame (1986), California Hall of Fame (2006),
              and the Anaheim Walk Of Stars (2014). He was made a Chevalier in
              the French Legion d'honneur. Some other national awards that
              Disney received are Officer d'Academie (France), Order of the
              Crown (Thailand), Order of Merit (Germany), Order of the Southern
              Cross (Brazil), and Order of the Aztec Eagle (Mexico). Finally,
              some awards that Disney was awarded in the United States were the
              Presidential Medal of Freedom, the Congressional Gold Medal, and
              the Audubon Medal from the National Audubon Society.
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
