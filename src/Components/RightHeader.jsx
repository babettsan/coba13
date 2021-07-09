import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10vh;
    background: var(--main-color);
    position: fixed;
`
const Image = styled.img`
    margin-left: .5em;
    height: 6em;
    width: 6em;
    border-radius: 50%;
    object-fit: cover;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`
const Title = styled.p`
    color: var(--font-color);
    margin: 0 0 0 .5em;
    font-size: 2em;
    font-weight: 500;
`
const SubTitle = styled.p`
    color: var(--font-color);
    margin: 0 0 0 .5em;
    margin-left: .5em;
    font-size: 2em;
`

const RightHeader = () => {
    return (
        <Container>
            <Image src='https://i.imgur.com/NlY3dqi.gif' alt='space-station'/>
            <TextContainer>
                <Title>CoBa 13</Title>
                <SubTitle>Última conexión: Reciente.</SubTitle>
            </TextContainer>
        </Container>
    )
}

export default RightHeader
