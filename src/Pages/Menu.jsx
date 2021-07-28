import React, { useState, useEffect } from 'react'
import Clock from 'react-live-clock';

import { Link } from 'react-router-dom'

import styled from 'styled-components'

import Service from './../Images/Icons/service-fill.svg';

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-image: url('https://i.imgur.com/CxsdM5B.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;  
    align-items: space-around;
    position:relative; 
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    &.animated{
    @keyframes static-vertical {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(.5em);
        }
        100% {
            transform: translateY(0);
        }
    }
    animation: static-vertical 1500ms infinite;
    } 
`

const TopMenu = styled.div`
    position:absolute;
    height: 10vh;
    top:0;
    width: 100%;
    background-color: black;
  
`
const BotMenu = styled.div`
    position:absolute;
    bottom:0;
    height: 10vh;
    width: 100%;
    background-color: black;
`
const LeftMenu = styled.div`
    background-color: red;
    width:30em;
    padding: 2em;
    display: flex;
    margin:10vh 0vh 10vh 0vh;
    flex-direction: row;
    flex-wrap: wrap;
    height: 80vh;
    position: absolute;
    left: 0;
`
const RightMenu = styled.div`
    background-color: red;
    width:20em;
    padding: 2em;
    display: flex;
    margin:10vh 0vh 10vh 0vh;
    flex-direction: row;
    flex-wrap: wrap;
    height: 80vh;
    position: absolute;
    right: 0;
`

const Icon = styled.img`
    width: 6em;
    height: 6em;
    transition: .3s;
    &:hover{
        transform: scale(1.10);
        cursor: pointer;
    }
`
const App = styled.div`
    display: flex;
    flex-direction: column;
    margin:1em;
`
const AppTitle = styled.p`
    margin:0;
    font-size: 2em;
    text-align: center;
`

const Menu = () => {

    const [animated, setAnimated] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setAnimated(false);
        }, 5000);
    }, []);

    return (
        <>
            <Landing>
                <Link to='/ship' style={{ textDecoration: 'none' }}>
                    <Container className={(animated) ? "animated" : ''} >
                        <TopMenu>
                            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                        </TopMenu>
                    </Container>
                </Link>
                <LeftMenu>
                    <App>
                        <Icon src={Service} alt="" />
                        <AppTitle>Hola</AppTitle>
                    </App>
                    <App>
                        <Icon src={Service} alt="" />
                        <AppTitle>Hola</AppTitle>
                    </App>
                    <App>
                        <Icon src={Service} alt="" />
                        <AppTitle>Hola</AppTitle>
                    </App>
                </LeftMenu>
                <RightMenu>
                    <App>
                        <Icon src={Service} alt="" />
                        <AppTitle>Hola</AppTitle>
                    </App>
                    <App>
                        <Icon src={Service} alt="" />
                        <AppTitle>Hola</AppTitle>
                    </App>
                    <App>
                        <Icon src={Service} alt="" />
                        <AppTitle>Hola</AppTitle>
                    </App>
                    <App>
                        <Icon src={Service} alt="" />
                        <AppTitle>Hola</AppTitle>
                    </App>
                </RightMenu>
                <BotMenu>
                    <Clock format="HH:mm:ss" interval={1000} ticking={false} />
                </BotMenu>
            </Landing>
        </>
    )
}

export default Menu