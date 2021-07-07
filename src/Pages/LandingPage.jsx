import React from 'react'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url('https://i.imgur.com/CxsdM5B.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;  
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
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
`
const Title = styled.h2`
    font-size: 2.6em;
    color: white;
    text-shadow: 3px 5px 8px black;
`
const Img = styled.img`
    padding: 8em;
    border-radius: 50%;
    background-image: url('https://i.imgur.com/NlY3dqi.gif');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: .5s;
    &:hover {
        transform: scale(2.25);
        cursor: pointer;
    }
`

const LandingPage = () => {

    return (
        <>
            <Landing>
                <Title>CoBa 13 Mission</Title>
                <Link to='/ship' style={{ textDecoration: 'none' }}>
                <Container>
                    <Img/>
                </Container>
                </Link>
                <Title>Start!</Title>
            </Landing>
        </>
    )
}

export default LandingPage