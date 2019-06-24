import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import handleInitalData from '../actions/shared'
import TopBar from './TopBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import LoadingBar from 'react-redux-loading-bar'
import AddPoll from './AddPoll';
import Poll from './Poll';

export const Views = {
  DASHBOARD: 'DASHBOARD',
  LEADERBOARD: 'LEADERBOARD',
  ADDPOLL: 'ADDPOLL'
}

var activeView = 'POLL';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitalData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar updateTime={100} maxProgress={95} progressIncrease={24} style={{ height: '12px' }} className="progress-bar progress-bar-striped bg-success" />
          <TopBar />
          <Container>
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/poll/:id' component={Poll} />
                <Route path='/add' component={AddPoll} />
              </div>}
          </Container>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App)