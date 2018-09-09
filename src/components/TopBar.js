import React from 'react'
import { Container, Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';

export default function TopBar({activeView}) {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">Polls</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={activeView==='Leaderboard'}>Leaderboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >Add Poll</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}