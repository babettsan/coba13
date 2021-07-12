import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    transition: 2s;
`
const Message = styled.p`
    color: var(--answer-color);
    background: var(--message);
    padding: .5em 1em .5em 1em;
    margin-left: 1em;
    font-size: 2em;
    font-weight: 500;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 2s;
`

const RightMessageIn = ({ message }) => {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    )
}

export default RightMessageIn
