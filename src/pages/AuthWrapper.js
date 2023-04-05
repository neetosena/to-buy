import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  console.log(error);

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading"></div>
      </Wrapper>
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <>{children}</>;
};

const Wrapper = styled.div`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export default AuthWrapper;
