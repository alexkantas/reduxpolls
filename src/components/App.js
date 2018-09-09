import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import Dashboard from './Dashboard';
import handleInitalData from '../actions/shared'
import Loading from './Loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitalData())
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Polls</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Leaderboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Add Poll</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          {this.props.loading === true
            ? <Loading />
            : <Dashboard />}
        </Container>
      </div>
    )
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App)