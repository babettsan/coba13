import React, { useState, useRef, useEffect } from 'react'
import LeftHeader from '../Components/LeftHeader'
import LeftContact from '../Components/LeftContact'
import RightHeader from '../Components/RightHeader'
import RightMessageIn from '../Components/RightMessageIn'
import RightMessageOut from '../Components/RightMessageOut'
import RightAnswers from '../Components/RightAnswers'

import { getMessages } from '../Redux/Actions/Messages/MessagesActions'
import { defaultTheme, goodTheme, openTheme, badTheme, alienTheme } from '../Redux/Actions/GlobalStyles/GlobalStylesActions'
import { useDispatch, useSelector } from 'react-redux'

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
    transition: 2s;
`
const RightSideContent = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
`
const RightSideFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    height: 10vh;
    background: var(--main-color);
    position: fixed;
    bottom: 0%;
    transition: 2s;
`

const Ship = () => {

    const dispatch = useDispatch()
    const messagesDB = useSelector(state => state.messages.messages)
    const messagesEndRef = useRef(null)

    const [messages, setMessages] = useState([])

    const [chapter, setChapter] = useState(1)
    const [message1, setMessage1] = useState(false)
    const [message2, setMessage2] = useState(false)
    const [message3, setMessage3] = useState(false)
    const [writing, setWriting] = useState(false)
    
    const setMessageTime = (message) => {
        setWriting(true)
        const time = message.length * 100
        if (message1 === false) {
            setTimeout(() => {
                setMessage1(true)
                setWriting(false)
            }, time)
        }
        if (message2 === false) {
            setTimeout(() => {
                setMessage2(true)
                setWriting(false)
            }, time)
        }
        if (message3 === false) {
            setTimeout(() => {
                setMessage3(true)
                setWriting(false)
            }, time)
        }
    }
    
    useEffect(() => {
        if (messagesDB.length > 0) return
        dispatch(getMessages())
        setMessageTime('asdasdasdasdasdasdasdasd')
    }, [])
    
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
                <button onClick={handleIn}>Receive Message</button>
                <button onClick={handleOut}>Send Message</button>
                <button onClick={handleClear}>Clear</button>
                <br/>
                <button onClick={() => dispatch(defaultTheme())}>DEFAULT</button>
                <button onClick={() => dispatch(goodTheme())}>GOOD</button>
                <button onClick={() => dispatch(openTheme())}>OPEN</button>
                <button onClick={() => dispatch(badTheme())}>BAD</button>
                <button onClick={() => dispatch(alienTheme())}>ALIEN</button>
            </LeftSide>
            <RightSide>
                <RightHeader writing={writing}/>
                <RightSideContent>
                    
                    {messages.map((m) => (
                        <>
                        {(m.message) ? <RightMessageIn message={m.message}/> : null}
                        {(m.answer) ? <RightMessageOut message={m.answer}/> : null}
                        </>
                    ))} 
                   

                    {(message1) ? <RightMessageIn message={messagesDB[0].message1}/> : null}
                    {(message2) ? <RightMessageIn message={messagesDB[0].message2}/> : null}
                    {(message3) ? <RightMessageIn message={messagesDB[0].message3}/> : null}

                    <div ref={messagesEndRef}></div>
                </RightSideContent>
                <RightSideFooter>
                        <RightAnswers answer='Respuesta 1'/>
                        <RightAnswers answer='Respuesta 2'/>
                        <RightAnswers answer='Respuesta 3'/>
                </RightSideFooter>
            </RightSide>
        </Container>
    )
}

export default Ship
