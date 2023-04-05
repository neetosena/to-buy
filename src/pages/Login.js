import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import background from "../images/Screenshot-4.jpg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <h1>Groceries</h1>

      <button className="btn-login" onClick={loginWithRedirect}>
        Login / Sign Up
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: 100%;
  background-position: top left;
  overflow: hidden;

  h1 {
    margin: 0;
    font-size: 4.5rem;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  p {
    margin: 1em;
    padding: 1em;
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    text-align: center;
  }

  button {
    display: inline-block;
    color: black;
    padding: 0.7em 2.5em;
    outline: none;
    border: none;
    border-radius: 0.7em;
    background-color: var(--light-green-color);
    font-family: "Cabinet Grotesk", sans-serif;
    font-size: 1.2rem;
    align-self: center;
    transition: background ease-in 0.5s;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .btn-login:hover,
  .btn-login:focus {
    background: white;
  }
`;

export default Login;
