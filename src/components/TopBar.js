import React from 'react'
import { Container, Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default function TopBar({ activeView }) {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand >Polls</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to='/' exact>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/leaderboard' >Leaderboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/add'>Add Poll</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}