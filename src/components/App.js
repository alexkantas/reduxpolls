import React, { Component } from 'react'
import { connect } from 'react-redux';
import TopBar from './TopBar';
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
        <TopBar />
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