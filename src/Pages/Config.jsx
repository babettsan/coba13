import React from 'react'
import LeftHeader from '../Components/LeftHeader'
import LeftContact from '../Components/LeftContact'
import RightHeader from '../Components/RightHeader'
import RightMessageIn from '../Components/RightMessageIn'
import RightMessageOut from '../Components/RightMessageOut'

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
    
    background-image: url('https://i.imgur.com/ezkBk2V.jpg');
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

const Config = () => {
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

                </RightSideContent>
                <RightSideFooter>

                </RightSideFooter>
            </RightSide>
        </Container>
    )
}

export default Config
