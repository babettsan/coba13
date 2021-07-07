import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10vh;
    background: #868686;
`
const Title = styled.p`
    color: #FFFFFF;
    margin-left: .5em;
    font-size: 2em;
    font-weight: 500;
`

const RightMessageIn = () => {
    return (
        <Container>
            <Title>Message In</Title>
        </Container>
    )
}

export default RightMessageIn
