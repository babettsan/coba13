import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10vh;
    background: var(--main-color);
;
`
const Image = styled.img`
    margin-left: .5em;
    height: 6em;
    width: 6em;
    border-radius: 50%;
    object-fit: cover;
`
const Title = styled.p`
    color: var(--font-color);
    margin-left: .5em;
    font-size: 2em;
    font-weight: 500;
`

const LeftHeader = () => {
    return (
        <Container>
            <Image src='https://i.imgur.com/0c2i4qp.jpg' alt='space-station'/>
            <Title>Estación Espacial</Title>
        </Container>
    )
}

export default LeftHeader
