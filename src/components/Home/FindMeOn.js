// FindMeOn.js
import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function FindMeOn() {
  return (
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/remiboes"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:boes.remi@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillMail />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/remiboes"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default FindMeOn;
