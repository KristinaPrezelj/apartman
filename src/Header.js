import React, { Component } from "react";
import { Navbar, NavItem, Parallax } from "react-materialize";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
class Navigation extends Component {
  render() {
    return (
      <div>
        <Parallax imageSrc="/photos/beach.jpg">
          <Navbar
            brand={<a href="#!">Apartman Ivana</a>}
            alignLinks="right"
            className="navbar "
          >
            <NavItem>About</NavItem>
            <NavItem>Sleeping</NavItem>
            <NavItem>Exploring</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>
              <i className="fab fa-instagram" />
            </NavItem>
            <NavItem>
              <i className="fab fa-twitter" />
            </NavItem>
            <NavItem>
              <i className="fab fa-facebook-f" />
            </NavItem>
          </Navbar>

          <h1>
            <ScrollAnimation animateIn="fadeInUp">
              Where passion meets the ground
            </ScrollAnimation>
          </h1>
        </Parallax>
      </div>
    );
  }
}

export default Navigation;
