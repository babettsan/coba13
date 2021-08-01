import React from 'react'
import { defaultTheme, alienTheme, openTheme, badTheme } from '../Redux/Actions/GlobalStyles/GlobalStylesActions'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background: var(neu-background-main);
    position: relative;
`
/* Animations */
const TopLight = styled.div`
    width: 5vw;
    height: 1vh;
    background: blue;
    position: absolute;
    border-radius: 100px;
    left: 0;
    top: 0;
    background: var(--neu-background);
    background: var(--neu-background-gradient);
    box-shadow: var(--neu-shadow-glow);
    z-index: 30000;
    @keyframes move-to-the-side {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(25vw);
        }
        100% {
            transform: translateX(0);
        }
    }
    animation: move-to-the-side 10000ms infinite;
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: 35vh;
    width: 20vw;
    border-radius: 50px;
    background: rgb(22,23,27);
    background: linear-gradient(340deg, rgba(22,23,27,1) 0%, rgba(52,57,63,1) 100%);
    -webkit-box-shadow: 8px 8px 20px 5px rgba(0,0,0,0.4); 
    box-shadow: 8px 8px 20px 5px rgba(0,0,0,0.4);
`

const Caption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 10vw;
`
const Text = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
    color: white;
    height: 8vh;
    width: 4vw;
    cursor: pointer;
    border-radius: 50%;
    transition: .3s;
    // Neumorphism
    // Shadows
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7); 
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);
    // Background
    background: var(--neu-background);
    background: var(--neu-background-gradient);
    &:hover {
        transform: scale(1.10);
        box-shadow: var(--neu-shadow-glow);
    }
`

const LeftMenuBottom = () => {

    const dispatch = useDispatch()

    return (
        <Container>
            <TopLight/>
            <Menu>
                <Caption>
                    <Text onClick={() => dispatch(defaultTheme())}>D</Text>
                </Caption>
                <Caption>
                    <Text onClick={() => dispatch(alienTheme())}>A</Text>
                </Caption>
                <Caption>
                    <Text onClick={() => dispatch(openTheme())}>O</Text>
                </Caption>
                <Caption>
                    <Text onClick={() => dispatch(badTheme())}>B</Text>
                </Caption>
            </Menu>
        </Container>
    )
}

export default LeftMenuBottom
