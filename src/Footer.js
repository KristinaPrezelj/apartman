import React, { Component } from "react";
import { Col, Row } from "react-materialize";
class Footerinfo extends Component {
  render() {
    return (
      <div>
        <Row className="footerrow">
          <Col xl={4} s={12}>
          <br></br>
            <h6>About</h6>
            <h6>Sleeping</h6>
            <h6>Exploring</h6>
            <h6>Contact</h6>
          </Col>
          <Col xl={4} s={12}>
            <h2>Apartman Ivana</h2>
            <h6>Biograd na Moru</h6>
            <h6>apartmanivana@gmail.com</h6>
            <h6>++385 91 1234567</h6><br></br>
          </Col>
          <Col xl={4} s={12}>
            <p>
              {" "}
              <i className="fab fa-instagram fa-3x" />
            </p>
            <p>
              {" "}
              <i className="fab fa-twitter fa-3x" />
            </p>
            <p>
              {" "}
              <i className="fab fa-facebook -f fa-3x" />
            </p>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Footerinfo;
