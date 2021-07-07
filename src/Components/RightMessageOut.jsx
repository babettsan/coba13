import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 10vh;
    background: #636363;
`
const Title = styled.p`
    color: #FFFFFF;
    margin-left: .5em;
    font-size: 2em;
    font-weight: 500;
`

const RightMessageOut = () => {
    return (
        <Container>
            <Title>Message Out</Title>
        </Container>
    )
}

export default RightMessageOut
