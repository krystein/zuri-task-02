import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Sidebar from "../component/sidebar";
import MovieLabel from "./MovieLabel";
import { FaTimes } from "react-icons/fa";
import Dropdown from "../component/Dropdown";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: -24rem;
  background: transparent;
  font-size: 2rem;
  cusrsor: pointer;
  z-index: 1001;
`;

const CloseIcon = styled(FaTimes)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 50px;
    width: 40px;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #000d1a;
    z-index: 999;
  }
  @media Screen and (max-width: 768px) {
    height: 40px;
    width: 30px;
  }
  @media Screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
  color: #000d1a;
`;
const Content = styled.div`
  margin-left: 15%;
  position: relative;
  z-index: -1;
  width: 100vw;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
const Contents = styled.div`
  width: 15%;
  height: 100vh;
  display: grid;
  align-items: center;
  grid-template-column: 1fr;
  grid-template-row: repeat(4, 80px);
  text-align: center;
  margin-bottom: 3rem;
  position: fixed;
  @media screen and (max-width: 1200px) {
    background: transparent;
  }
`;

function MovieDetails({ toggle, isOpen }) {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=169f0dafa432e90ca81ad0ae8355f6a2`
      )
      .then((res) => {
        setMovieDetails(res.data);
        const imageLink = res.data.backdrop_path;
        const imageUrl = `https://image.tmdb.org/t/p/w500/${imageLink}`;
        setBackgroundImage(imageUrl);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Contents className="">
        {isOpen && (
          <Icon>
            <CloseIcon onClick={toggle} />
          </Icon>
        )}
        {isOpen || <Sidebar toggle={toggle} />}
      </Contents>
      <Content>
        <div className="p-5 rounded-lg">
          <MovieLabel
            backgroundImage={backgroundImage}
            name={movieDetails.original_title}
            date={movieDetails.release_date}
            runtime={movieDetails.runtime}
            overview={movieDetails.overview}
          />
        </div>
      </Content>
    </Container>
  );
}

export default MovieDetails;
