import React from 'react'
import styled from 'styled-components'

interface PatientsPageProps {}

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PatientsPage: React.FC<PatientsPageProps> = ({}) => {
    return (
        <>
            <Header>
                <h1>Patients List</h1>
            </Header>
        </>
    )
}

export default PatientsPage