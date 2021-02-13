import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeroWrapper = styled.section`
  height: 600px;
  display: flex;
  align-items: center;
  font-family: "Playfair Display", serif;
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    content: "";
    background: url("https://images.pexels.com/photos/230743/pexels-photo-230743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    filter: brightness(35%);
    z-index: -10;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  color: white;
  font-weight: 500;
  @media screen and (max-width: 600px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: 500;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <section className="container px-5 px-md-0">
        <header className="row">
          <div className="col-12 col-md-8">
            <Title className="title">Productos caseros & de calidad.</Title>
          </div>
        </header>
        <div className="row my-4">
          <div className="col-12 col-md-8">
            <Subtitle className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
              architecto animi iste exercitationem dolorem quas porro beatae vel
              voluptates. Voluptate, aut. Eum molestias recusandae est vel,
              voluptates hic dignissimos!
            </Subtitle>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <Link href="/productos">
              <button type="button" className="btn btn-primary">
                <a>Ver productos</a>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
};

export default Hero;
