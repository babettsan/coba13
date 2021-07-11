import React, { useState, useRef, useEffect } from 'react'
import LeftHeader from '../Components/LeftHeader'
import LeftContact from '../Components/LeftContact'
import RightHeader from '../Components/RightHeader'
import RightMessageIn from '../Components/RightMessageIn'
import RightMessageOut from '../Components/RightMessageOut'

import { defaultTheme, goodTheme, openTheme, badTheme, alienTheme } from '../Redux/Actions/GlobalStyles/GlobalStylesActions'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin: auto auto auto auto;
`
const LeftSide = styled.div`
    width: 30vw;
    background: var(--main-dark-light);
`
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 90vh;
    background: var(--main-color-light);
    overflow-y: scroll;
    
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const RightSideContent = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
`
const RightSideFooter = styled.div`
    width: 100%;
    height: 10vh;
    background: black;
    position: fixed;
    bottom: 0%;
`

const Ship = () => {

    const dispatch = useDispatch()

    const [messages, setMessages] = useState([])
    
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleIn = () => {
        setMessages([...messages, {
            message: 'Mensaje de entrada'
        }])
    }
    const handleOut = () => {
        setMessages([...messages, {
            answer: 'Mensaje de salida'
        }])
    }

    const handleClear = () => {
        setMessages([])
    }

    return (
        <Container>
            <LeftSide>
                <LeftHeader/>
                <Link to='/ship' style={{ textDecoration: 'none'}}>
                    <LeftContact src='https://i.imgur.com/NlY3dqi.gif' title='CoBa 13'/>
                </Link>
                <LeftContact src='https://i.imgur.com/tiCBFNh.png' title='Guille'/>
                <LeftContact src='https://i.imgur.com/69rn4sK.png' title='Barbi'/>
                <Link to='/config' style={{ textDecoration: 'none'}}>
                    <LeftContact src='https://i.imgur.com/TOznIdC.png' title='Configuración'/>
                </Link>
            </LeftSide>
            <RightSide>
                <RightHeader/>
                <RightSideContent>
                    {messages.map((m) => (
                        <>
                        {(m.message) ? <RightMessageIn message={m.message}/> : null}
                        {(m.answer) ? <RightMessageOut message={m.answer}/> : null}
                        </>
                    ))}
                    <div ref={messagesEndRef}></div>
                </RightSideContent>
                <RightSideFooter>
                    <button onClick={handleIn}>Receive Message</button>
                    <button onClick={handleOut}>Send Message</button>
                    <button onClick={handleClear}>Clear</button>
                    <br/>
                    <button onClick={() => dispatch(defaultTheme())}>DEFAULT</button>
                    <button onClick={() => dispatch(goodTheme())}>GOOD</button>
                    <button onClick={() => dispatch(openTheme())}>OPEN</button>
                    <button onClick={() => dispatch(badTheme())}>BAD</button>
                    {/* <button onClick={() => dispatch(alienTheme())}>ALIEN</button> */}
                </RightSideFooter>
            </RightSide>
        </Container>
    )
}

export default Ship
