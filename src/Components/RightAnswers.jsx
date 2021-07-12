import React from 'react'

import styled from 'styled-components'

const Answer = styled.p`
    color: var(--font-color);
    background: var(--answer);
    padding: .5em 1em .5em 1em;
    font-size: 2em;
    font-weight: 500;
    border-radius: 1em;
    transition: 2s;
`

const RightAnswers = ({ answer }) => {
    return (
        <Answer>{answer}</Answer>
    )
}

export default RightAnswers
