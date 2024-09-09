// Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/home-img.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container>
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <div className="rocket-container">
                    <span className="rocket" role="img" aria-label="fusée">
                      🚀
                      <span className="flame-container"></span>
                    </span>
                  </div>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Remi Boes</strong>
                </h1>

                <div>
                  <Type />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="home-about-section">
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a final-year student in the ISMIN program{" "}
                <i>
                  <b className="purple">
                    (Microelectronics and Computer Science Engineering){" "}
                  </b>
                </i>
                at Mines de Saint-Étienne. My academic journey has provided me
                with a strong foundation of knowledge, which I have{" "}
                <i>
                  <b className="purple"> continuously enriched </b>
                </i>{" "}
                over the years as a passionate self-learner.
                <br />
                <br />
                At the core of this program lies{" "}
                <i>
                  <b className="purple"> electronics and computer science, </b>
                </i>{" "}
                fields that constantly drive me to explore the limits of
                technology. Whether it's through{" "}
                <i>
                  <b className="purple">
                    programming, electronic circuit design, web development,{" "}
                  </b>
                </i>
                or building robotic projects, I am inspired by the endless
                possibilities that technology offers.
                <br />
                <br />
                This portfolio is an opportunity for me to share my journey,{" "}
                <i>
                  <b className="purple"> achievements, </b>
                </i>{" "}
                and <i>
                  <b className="purple"> projects </b>
                </i>{" "}
                in these fields.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
