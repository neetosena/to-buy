import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundError from "../images/background-5.jpg";

const Error = () => {
  return (
    <Wrapper>
      <p>This page </p>
      <p>does not exist</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundError});
  background-size: 100%;
  background-position: top left;

  p {
    margin: 0;
    text-align: center;
  }

  .btn {
    align-self: center;
    max-width: 100%;
    font-family: "Cabinet Grotesk", sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    margin-top: 1em;
    padding: 0.7em 2.5em;
    background-color: var(--blue-color);
    border-radius: 0.7em;
    color: white;
    transition: background ease-in 0.3s;
  }

  .btn:hover,
  .btn:focus {
    background-color: white;
    color: var(--blue-color);
  }
`;

export default Error;
