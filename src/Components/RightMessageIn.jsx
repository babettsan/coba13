import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: center;
    width: 100%;
    height: 10vh;
`
const Message = styled.p`
    color: #FFFFFF;
    background: red;
    padding: .5em;
    margin-left: 1em;
    font-size: 2em;
    font-weight: 500;
    border-radius: 1em;
`

const RightMessageIn = ({ message }) => {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    )
}

export default RightMessageIn
