import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'

const HtmlNavbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--black);

    a {
        text-decoration: none;
        color: white;
    }
`
const WebNavbar = styled.div`
    max-width: 120rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.5rem;
    color: white;
    font-size: 1.5rem;

    p.logo {

        display: flex;
        align-items: center;

        img {
            display: inline-block;
            width: 35px;
            height: 35px;
            max-height: 35px;
            border-radius: 50%;
        }

        p{
            margin-left: 1rem;
            font-weight: 700;
        }
    }

    ul {
        display: flex;
        gap: 3rem;
        list-style: none;
    }
`
const WebNavbarItem = styled.p<{ $active?: boolean }>`
    color: white;
    font-weight: 500;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${props => props.$active ? '#1d1e21' : 'transparent'};

    &:hover {
        background-color: #374151;
    }
`

const Navbar: React.FC<{}> = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null)

    const handleItemClick = (name: string) => {
        setActiveItem(name)
    }

    return (
        <>
            <HtmlNavbar>
                <WebNavbar>
                    <Link to='/home'>
                        <p className='logo'>
                            <img src={logo} alt='logo' />
                            <p> VET APP </p>
                        </p>
                    </Link>
                    <ul>
                        <li>
                            <Link to='/patients'>
                                <WebNavbarItem
                                    onClick={() => handleItemClick("pacientes")}
                                    $active={activeItem === "pacientes"}
                                >
                                    Pacientes
                                </WebNavbarItem>
                            </Link>
                        </li>
                        <li>
                            <Link to='/inventory'>
                                <WebNavbarItem
                                    onClick={() => handleItemClick("inventario")}
                                    $active={activeItem === "inventario"}
                                >
                                    Inventario
                                </WebNavbarItem>
                            </Link>
                        </li>
                        <li>
                            <Link to='/schedule'>
                                <WebNavbarItem
                                    onClick={() => handleItemClick("horario")}
                                    $active={activeItem === "horario"}
                                >
                                    Horario
                                </WebNavbarItem>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reports'>
                                <WebNavbarItem
                                    onClick={() => handleItemClick("informes")}
                                    $active={activeItem === "informes"}
                                >
                                    Informes
                                </WebNavbarItem>
                            </Link>
                        </li>
                    </ul>
                    <div>

                    </div>
                </WebNavbar>
            </HtmlNavbar>
        </>
    )
}

export default Navbar