import React from 'react'
import { Container, Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import { Views } from './App';

export default function TopBar({ activeView }) {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">Polls</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink active={activeView === Views.DASHBOARD}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={activeView === Views.LEADERBOARD}>Leaderboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={activeView === Views.ADDPOLL}>Add Poll</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}