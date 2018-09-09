import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import handleInitalData from '../actions/shared'
import Loading from './Loading'
import TopBar from './TopBar';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitalData())
  }

  render() {
    return (
      <div>
        <TopBar activeView={'Leaderboard'} />
        <Container>
          {this.props.loading === true
            ? <Loading />
            : <Leaderboard />}
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