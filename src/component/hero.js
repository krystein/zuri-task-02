import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/Poster.png";
import Img1 from "../img/PngItem_1381056 1.svg";
import Img2 from "../img/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import styled from "styled-components";
import Navbar from "./navbar";
import Button from "./Button";

const Herosection = styled.section`
  height: 70vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background-image: url(${Img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-itmes: center:
  overflow: hidden;
  position: relative;
`;
const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: start;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    overflow: hidden;
    opacity: 0.7;
  }
`;

const Herocontent = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  width: 50%;
  color: #fff;
  justify-content: center;
  h1 {
    font-size: clamp(0.8rem, 8vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    word-wrap: break-word;
  }
  h3 {
    font-size: clamp(0.8rem, 8vw, 3rem);
    font-family: "Mr De Haviland", cursive;
    font-weight: 400;
    word-wrap: break-word;
  }
  p {
    margin-bottom: 1.5rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: clamp(0.5rem, 8vw, 0.8em);
    word-wrap: break-word;
  }
`;

const Hero = ({ handleChange, search, performMovieSearch }) => {
  return (
    <Herosection>
      <HeroWrapper className="container p-2">
        <Navbar handleChange={handleChange} search={search} />
        <HeroSlide className="p-3">
          <Herocontent>
            <h3>John Wick 3 : Parabellum</h3>
            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
              <div
                className="d-flex align-items-center"
                style={{ gap: "10px" }}
              >
                <img src={Img2} alt="" />
                <p style={{ margin: "0" }}>97%</p>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ gap: "10px" }}
              >
                <img src={Img1} alt="" />
                <p style={{ margin: "0" }}>86.0 / 100</p>
              </div>
            </div>
            <p className="text-align text-break" style={{ margin: "0" }}>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <Button type="submit" style={{ background: "#BE123C" }}>
              Watch Now!
            </Button>
          </Herocontent>
        </HeroSlide>
      </HeroWrapper>
    </Herosection>
  );
};

export default Hero;
