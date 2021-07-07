import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10vh;
    background: #484848;
    position: fixed;
`
const Image = styled.img`
    margin-left: .5em;
    height: 6em;
    width: 6em;
    border-radius: 50%;
    object-fit: cover;
`
const Title = styled.p`
    color: #FFFFFF;
    margin-left: .5em;
    font-size: 2em;
    font-weight: 500;
`

const RightHeader = () => {
    return (
        <Container>
            <Image src='https://i.imgur.com/NlY3dqi.gif' alt='space-station'/>
            <Title>Astronauta Perdido</Title>
        </Container>
    )
}

export default RightHeader
