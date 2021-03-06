import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const HostLobbyContainer = styled.div`
  margin: 40px;
`;

const Instructions = styled.p`
  text-align: center;
  color: white;
  font-size: 12px;
  background: transparent;
`;

// const Button = styled.button``;

const HostLobby = ({ currentGame }) => {
  return (
    <HostLobbyContainer>
      <Instructions>Game Id: {currentGame.id}</Instructions>
      <Instructions>Host Name: {currentGame.username}</Instructions>
    </HostLobbyContainer>
  );
};

export default HostLobby;
