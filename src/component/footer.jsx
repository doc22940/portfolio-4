import React from "react";
import { Container } from "react-bootstrap";
import { FaTwitter, FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-dark " style={{ padding: "10px" }}>
      {/* <Navbar collapseOnSelect expand="md" bg="dark" variant="dark"> */}
      <Container>
        <div className="mt-2 mx-auto text-center" style={{ width: "200px" }}>
          <a
            title="CodeWars"
            className="link_icon mr-3"
            href="https://www.codewars.com/users/bim240"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaptopCode />
          </a>
          <a
            title="Twitter"
            className="link_icon mr-3"
            href="https://twitter.com/bim240"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaTwitter />
          </a>
          <a
            title="GitHub"
            className="link_icon mr-3"
            href="https://github.com/bim240"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            title="LinkedIn"
            className="link_icon mr-3"
            href="https://www.linkedin.com/in/bim240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div
          className="font-weight-bold mx-auto text-center mt-2"
          style={{
            width: "400px",
            color: "white",
          }}
        >
          Bimlendu &copy; AltCampus
        </div>
      </Container>
      {/* </Navbar> */}
    </div>
  );
};

export default Footer;
