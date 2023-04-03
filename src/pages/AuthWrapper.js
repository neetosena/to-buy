import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  console.log(error);

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading"></div>;
      </Wrapper>
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <>{children}</>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

export default AuthWrapper;
