import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

import AboutComponent from "./components/AboutComponent";
import Title from "./components/Title";
import AwardsComponent from "./components/AwardsComponent";
import ThemeParkComponent from "./components/ThemeParkComponent";

function App() {
  //Variable and the function to set it
  const [components, setComponents] = useState([
    { Title: "About", Component: AboutComponent },
    { Title: "Awards", Component: AwardsComponent },
    { Title: "ThemeParks", Component: ThemeParkComponent },
    { Title: "", Component: Title },
  ]);

  return (
    <BrowserRouter>
      <div className="App-header">
        <Container fluid>
          <Row className="p-0">
            <Col className="p-0">
              <Navbar bg="light" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="/">Home</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                  >
                    <Nav>
                      {components.map((component, idx) => {
                        let { Component, Title } = component;

                        return (
                          <Nav.Item key={idx}>
                            <Nav.Link href={Title}>{Title}</Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
          <Routes>
            {components.map((Link, idx) => {
              let { Component, Title } = Link;
              return <Route path={Title} element={<Component />} key={idx} />;
            })}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
