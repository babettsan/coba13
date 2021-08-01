import React, { useState, useRef, useEffect } from 'react'
import LeftHeader from '../Components/LeftHeader'
import LeftContact from '../Components/LeftContact'
import RightHeader from '../Components/RightHeader'
import RightMessageIn from '../Components/RightMessageIn'
import RightMessageOut from '../Components/RightMessageOut'
import RightAnswers from '../Components/RightAnswers'
import LeftMenuBottom from '../Components/LeftMenuBottom'

import { getMessages } from '../Redux/Actions/Messages/MessagesActions'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin: auto auto auto auto;
    background: var(--neu-background-main);
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
`
const LeftSide = styled.div`
    width: 30vw;
    background: var(--neu-background-main);
    position: relative;
`
/* Animations */
const LeftLight = styled.div`
    width: .5vw;
    height: 10vh;
    margin-top: 10vh;
    background: blue;
    position: absolute;
    border-radius: 100px;
    right: 0;
    background: var(--neu-background);
    background: var(--neu-background-gradient);
    box-shadow: var(--neu-shadow-glow);
    z-index: 30000;
    @keyframes move-vertical {
      0% {
          transform: translateY();
      }
      50% {
          transform: translateY(80vh);
      }
      100% {
          transform: translateY(0);
      }
    }
    animation: move-vertical 15000ms infinite;
`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 90vh;
    overflow-y: scroll;
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 2s;
    border-bottom-left-radius: 50px;

    /* width */
    ::-webkit-scrollbar {
        width: 1vw;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--neu-background-main);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--neu-background);
        box-shadow: var(--neu-shadow-glow);
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--neu-background);
        box-shadow: var(--neu-shadow-glow);
    }
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
    background: var(--neu-background-main);
    position: fixed;
    bottom: 0%;
    transition: 2s;
`

    // // ********** Testing **********
    // useEffect(() => {
    //     scrollToBottom()
    // }, [messages])

    // const scrollToBottom = () => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    // }
    // const handleIn = () => {
    //     setMessages([...messages, {
    //         message: 'Mensaje de entrada'
    //     }])
    // }
    // const handleOut = () => {
    //     setMessages([...messages, {
    //         answer: 'Mensaje de salida'
    //     }])
    // }
    // const handleClear = () => {
    //     setMessages([])
    // }
    // // ********** Testing **********

const Ship = () => {

    const dispatch = useDispatch()
    const messagesDB = useSelector(state => state.messages.messages)
    const messagesEndRef = useRef(null)

    const [index, setIndex] = useState(0)
    const [message1, setMessage1] = useState(false)
    const [message2, setMessage2] = useState(false)
    const [message3, setMessage3] = useState(false)
    const [messages, setMessages] = useState([])

    const [writing, setWriting] = useState(false)
    
    useEffect(() => {
        if (messagesDB.length > 0) return
        setMessageOneTime('test test test test test test')
        dispatch(getMessages())
    }, [])

    const setMessageOneTime = (message) => {
        setWriting(true)
        const time = message.length * 100
        setTimeout(() => {
            setMessage1(true)
            setTimeout(() => {
                setMessage2(true)
                setTimeout(() => {
                    setMessage3(true)
                    setWriting(false)
                }, time)
            }, time)
        }, time)
    }

    const displayMessages = (data) => {
        return(
            <>
            {(message1) ? <RightMessageIn message={data[index].message1}/> : null}
            {(message2) ? <RightMessageIn message={data[index].message2}/> : null}
            {(message3) ? <RightMessageIn message={data[index].message3}/> : null}
            </>
        )
    }   
    
    const displayAnswers = (data) => {
        return(
            <>
                <RightAnswers answer={data[index].answer1}/>
                <RightAnswers answer={data[index].answer2}/>
                <RightAnswers answer={data[index].answer3}/>
            </>
        )
    }

    return (
        <Container>
            <LeftSide>
                <LeftLight/>
                <LeftHeader/>
                <Link to='/ship' style={{ textDecoration: 'none'}}>
                    <LeftContact src='https://i.imgur.com/NlY3dqi.gif' title='CoBa 13'/>
                </Link>
                <LeftContact src='https://i.imgur.com/tiCBFNh.png' title='Guille'/>
                <LeftContact src='https://i.imgur.com/69rn4sK.png' title='Barbi'/>
                <Link to='/config' style={{ textDecoration: 'none'}}>
                    <LeftContact src='https://i.imgur.com/TOznIdC.png' title='Configuración'/>
                </Link>
                {/* <button onClick={handleIn}>Receive Message</button>
                <button onClick={handleOut}>Send Message</button>
                <button onClick={handleClear}>Clear</button> */}
                <LeftMenuBottom/>
            </LeftSide>
            <RightSide>
                <RightHeader writing={writing}/>
                <RightSideContent>
                    {/* {(messagesDB.length > 0) ? displayMessages(messagesDB) : null}
                    <div ref={messagesEndRef}></div> */}
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                    <RightMessageIn message='Testing'/>
                </RightSideContent>
                <RightSideFooter>

                    {(messagesDB.length > 0) ? displayAnswers(messagesDB) : null}

                </RightSideFooter>
            </RightSide>
        </Container>
    )
}

export default Ship
