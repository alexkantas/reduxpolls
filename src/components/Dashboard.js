import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    state = { showAnswered: false };

    showUnAnswered = () => {
        this.setState({ showAnswered: false })
    }

    showAnswered = () => {
        this.setState({ showAnswered: true })
    }

    render() {
        const { showAnswered } = this.state;
        const { answered, unanswered } = this.props;
        const list = showAnswered ? answered : unanswered;
        return (
            <div>
                <Row>
                    <Col>
                        <Button onClick={this.showAnswered} active={showAnswered} outline size="lg" block color="success">Answered</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.showUnAnswered} active={!showAnswered} outline size="lg" block color="danger">Unanswered</Button>
                    </Col>
                </Row>
                <Row>
                    <ul className="list-unstyled">
                        {list.map(poll => (
                            <li key={poll.id} className="lead"><Link to={`poll/${poll.id}`}>{poll.question}</Link></li>
                        ))}
                    </ul>
                </Row>
            </div>
        )
    }
}

function mapStateToProps({ users, polls, authUser }) {
    const answers = users[authUser].answers
    const answered = answers.map(id => polls[id]).sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = Object.keys(polls)
        .filter(id => !answers.includes(id))
        .map(id => polls[id])
        .sort((a, b) => b.timestamp - a.timestamp);

    return { answered, unanswered }
}

export default connect(mapStateToProps)(Dashboard)