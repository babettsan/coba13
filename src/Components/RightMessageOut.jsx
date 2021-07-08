import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 10vh;
`
const Message = styled.p`
    color: #FFFFFF;
    background: blue;
    padding: 0.5em;
    margin-right: 1em;
    font-size: 2em;
    font-weight: 500;
    border-radius: 1em;
`

const RightMessageOut = ({ message }) => {
    return (
        <Container>
            <Message>{ message }</Message>
        </Container>
    )
}

export default RightMessageOut
