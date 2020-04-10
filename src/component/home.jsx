import React from "react";
import QueueAnim from "rc-queue-anim";
// import { Link } from "react-router-dom";
import Typical from "react-typical";
import { Card, Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <QueueAnim>
        <section className="home_section parallex" id="home">
          <Card className="bg-dark text-white no_radius flex">
            <Card.ImgOverlay>
              <Container>
                <Card.Title className="margin_top">
                  <h1 className="font-weight-bold  " key="1">
                    I'M Bimlendu
                  </h1>
                </Card.Title>
                <Card.Text>
                  <h3 key="2">
                    I'm a{" "}
                    <Typical
                      steps={[
                        "Web Designer.",
                        1000,
                        "Web Developer.",
                        1000,
                        "Full Stack Developer.",
                        1000,
                        "MERN Developer.",
                        1000,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                    />{" "}
                  </h3>
                </Card.Text>
                <Card.Text ket="3">
                  A profession that completely matches your talent, aspirations
                  and
                  <br />
                  skills is the best profession you can choose.
                </Card.Text>
                <div className="mt-4" key="5">
                  <a
                    className="link_icon mr-3"
                    href="https://www.facebook.com/bim240"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="link_icon mr-3"
                    href="https://twitter.com/bim240"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitter />
                  </a>
                  <a
                    className="link_icon mr-3"
                    href="https://github.com/bim240"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="link_icon mr-3"
                    href="https://www.linkedin.com/in/bim240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </Container>
            </Card.ImgOverlay>
          </Card>
          ;
        </section>
      </QueueAnim>
    </>
  );
};

export default Home;
