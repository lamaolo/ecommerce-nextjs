import React from "react";
import styled from "styled-components";

const FooterContainer = styled.section`
  background: #852d14;
  clear: both;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const SocialIcon = styled.i`
  color: white;
  font-size: 1.5rem;
  margin-right: 15px;
  margin-bottom: 0;
  font-weight: 800;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container py-2">
        <div
          style={{ height: "60px" }}
          className="row d-flex align-items-center justify-content-between"
        >
          <div className="col-12 col-md-6 text-center text-md-left">
            <div className="social-icons">
              <a href="#">
                <SocialIcon className="fab fa-facebook"></SocialIcon>
              </a>

              <a href="#">
                <SocialIcon className="fab fa-instagram"></SocialIcon>
              </a>

              <a href="#">
                <SocialIcon className="fab fa-twitter"></SocialIcon>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center text-md-right mt-2 mt-md-0 ">
            <SocialIcon>
              <i className="fab fa-github mr-2"></i>
              Made by{" "}
              <a
                href="https://github.com/lamaolo/"
                target="_blank"
                rel="noopener"
                style={{ color: "cyan" }}
              >
                Lucero Amaolo
              </a>
              .
            </SocialIcon>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
