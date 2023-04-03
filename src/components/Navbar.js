import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  console.log(user);
  return (
    <Wrapper>
      <div>
        <img src={user.picture} alt={user.name} />
        <h4>
          Welcome, <strong>{user.name}</strong>
        </h4>
      </div>
      <button
        type="button"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <IoMdLogOut className="logout-icon" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.4em 1em;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    margin: 0 auto;

    align-items: center;
  }

  img {
    margin: 0;
    border-radius: 50%;
    object-fit: cover;
    max-width: 100%;
    width: 1.5em;
    height: 1.5em;
    max-height: 100%;
    background: white;
  }

  h4 {
    margin: 0;
    margin-left: 0.7em;
    font-size: 1rem;
    font-weight: 100;
  }

  strong {
    font-weight: 900;
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    background: none;
  }

  .logout-icon {
    margin: 0;
    padding: 0;

    color: var(--pink-color);
  }
  .logout-icon:hover,
  .logout-icon:focus {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export default Navbar;
