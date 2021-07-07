import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10vh;
    background: #292929;
    transition: .25s;
    &:hover {
        background: gray;
    }
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

const LeftContact = ({ src, title }) => {
    return (
        <Container>
            <Image src={src}/>
            <Title>{title}</Title>
        </Container>
    )
}

export default LeftContact
