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
        login / sing up
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-size: 100%;
  background-position: top left;

  h1 {
    font-size: 4rem;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  button {
    display: inline-block;
    padding: 0.7em 2.5em;
    outline: none;
    border: none;
    border-radius: 0.7em;
    background-color: var(--light-green-color);
    font-family: "Abhaya Libre", serif;
    font-size: 1rem;
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
