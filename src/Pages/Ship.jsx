import React from 'react'
import LeftHeader from '../Components/LeftHeader'
import LeftContact from '../Components/LeftContact'
import RightHeader from '../Components/RightHeader'
import RightMessageIn from '../Components/RightMessageIn'
import RightMessageOut from '../Components/RightMessageOut'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin: auto auto auto auto;
`
const LeftSide = styled.div`
    width: 30vw;
    background: #212121;
`
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 90vh;
    background: gray;
    overflow-y: scroll;
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
    return (
        <Container>
            <LeftSide>
                <LeftHeader/>
                <LeftContact src='https://i.imgur.com/NlY3dqi.gif' title='Astronauta Perdido'/>
                <LeftContact src='https://i.imgur.com/tiCBFNh.png' title='Guille'/>
                <LeftContact src='https://i.imgur.com/69rn4sK.png' title='Barbi'/>
            </LeftSide>
            <RightSide>
                <RightHeader/>
                <RightSideContent>
                    <RightMessageIn message='Mensaje de entrada'/>
                    <RightMessageOut message='Mensaje de salida'/>
                    <RightMessageIn message='Mensaje de entrada'/>
                    <RightMessageOut message='Mensaje de salida'/>
                    <RightMessageIn message='Mensaje de entrada'/>
                    <RightMessageOut message='Mensaje de salida'/>
                    <RightMessageIn message='Mensaje de entrada'/>
                    <RightMessageOut message='Mensaje de salida'/>
                    <RightMessageIn message='Mensaje de entrada'/>
                    <RightMessageOut message='Mensaje de salida'/>
                    <RightMessageIn message='Mensaje de entrada'/>
                    <RightMessageOut message='Mensaje de salida'/>
                </RightSideContent>
                <RightSideFooter/>
            </RightSide>
        </Container>
    )
}

export default Ship