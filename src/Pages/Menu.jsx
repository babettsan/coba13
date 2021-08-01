import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";

import { Link } from "react-router-dom";

import styled from "styled-components";

import Service from "./../Images/Icons/service-fill.svg";
import Ship from "./../Images/Icons/ship-icon.svg";

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* background-color:white; */
  background-image: url("https://static.tumblr.com/c32de755e6fcf7d5ce7b2c697056147d/t0kvqon/0HCo67xno/tumblr_static_utu453x4atwog08o8wcw88wg_2048_v2.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  align-items: space-around;
  position: relative;
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &.animated {
    @keyframes static-vertical {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0.5em);
      }
      100% {
        transform: translateY(0);
      }
    }
    animation: static-vertical 1500ms infinite;
  }
`;

const TopMenu = styled.div`
  position: absolute;
  height: 4vh;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
`;

const BotMenu = styled.div`
  position: absolute;
  bottom: 0;
  height: 8vh;
  width: 50%;
  background-color: black;
  left: 25%;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  transition: 0.5s;
  background: chartreuse;
`;

const IconsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftMenu = styled.div`
  background-color: transparent;
  width: 30em;
  padding: 2em;
  display: flex;
  margin: 10vh 0vh 10vh 0vh;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80vh;
  position: absolute;
  left: 0;
`;

const Icon = styled.img`
  width: 6em;
  height: 6em;
  transition: 0.3s;

  margin: auto;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &.rounded {
    border-radius: 50%;
  }
`;

const App = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  height: fit-content;
  padding: 0.5em;
  transition: 0.3s;
  &.bot-icon {
    &:hover {
      transform: translateY(-1.5em);
    }
  }
`;
const AppTitle = styled.p`
  margin: 0;
  font-size: 2em;
  text-align: center;
  color: white;
`;

const TopIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color:white;
`;

const Menu = () => {
//   const [animated, setAnimated] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setAnimated(false);
//     }, 5000);
//   }, []);

  return (
    <>
      <Landing>
        <Link>
          <Container>
            <TopMenu>
              <TopIconsContainer>
                <div>aplicaciones</div>
                <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                <div>boton apagado y cosas</div>
              </TopIconsContainer>
            </TopMenu>
          </Container>
        </Link>

        <LeftMenu>
          <Link to="/ship" style={{ textDecoration: "none" }}>
            <App>
              <Icon
                className="rounded"
                src={Ship}
                alt=""
              />
              <AppTitle>Coba</AppTitle>
            </App>
          </Link>

          <App>
            <Icon src='https://i.imgur.com/q5o0NkA.png' alt="" />
            <AppTitle>Pokedex</AppTitle>
          </App>
          <App>
            <Icon src={Service} alt="" />
            <AppTitle>Hola</AppTitle>
          </App>
        </LeftMenu>

        <BotMenu>
          <IconsContainer>
            <App className="bot-icon">
              <Icon src={Service} alt="" />
              <AppTitle>Hola</AppTitle>
            </App>
            <App className="bot-icon">
              <Icon src={Service} alt="" />
              <AppTitle>Hola</AppTitle>
            </App>
            <App className="bot-icon">
              <Icon src={Service} alt="" />
              <AppTitle>Hola</AppTitle>
            </App>
          </IconsContainer>
        </BotMenu>
      </Landing>
    </>
  );
};

export default Menu;
