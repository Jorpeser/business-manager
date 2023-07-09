import React from 'react'
import styled from 'styled-components'

interface BoxProps {
    children?: React.ReactNode
}

const Container = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 2.4rem;
`

const Box: React.FC<BoxProps> = ({children}) => {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Box