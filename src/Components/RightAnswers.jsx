import React from 'react'

import styled from 'styled-components'

const Answer = styled.p`
    color: var(--font-color);
    /* background: var(--answer); */
    background: var(--neu-background);
    background: var(--neu-background-gradient);
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7); 
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);
    padding: .5em 1em .5em 1em;
    font-size: 2em;
    font-weight: 500;
    border-radius: 1em;
    cursor: pointer;
    transition: .25s !important;
    &:hover {
        box-shadow: var(--neu-shadow-glow);
        transform: scale(1.05);
    }
`

const RightAnswers = ({ answer }) => {
    return (
        <Answer>{answer}</Answer>
    )
}

export default RightAnswers
