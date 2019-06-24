import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { getPercentage } from '../utils/helpers'
import { handleAddAnswer } from '../actions/answers'

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

class Poll extends Component {

    handleAnswer = (answer) => {
        const { poll, authedUser } = this.props;
        this.answer = true;

        this.props.dispatch(handleAddAnswer({
            authedUser,
            answer,
            id: poll.id
        }))
    }

    render() {
        if (this.props.poll === null) return <p>This poll does not exist</p>;

        const { poll, vote, authorAvatar } = this.props;
        const totalVotes = getVoteKeys().reduce((total, key) => total + poll[key].length, 0);

        return (
            <div>
                <h1>{poll.question}</h1>
                <p className="text-center">By <img className="rounded" style={{ width: "4em" }} src={authorAvatar} alt="Author" /></p>
                <div style={{ width: "100%" }}>
                    {['aText', 'bText', 'cText', 'dText'].map(key => {
                        const count = poll[key[0] + 'Votes'].length;
                        return (
                            <Button key={key} onClick={() => { if (vote === null && !this.answer) this.handleAnswer(key[0]); }} style={{ width: "100%" }} outline size="primary" color='primary' block {...(vote == key[0] ? { active: true } : { active: false })} >
                                {vote === null ? poll[key] : <span>{poll[key]}  ({getPercentage(count, totalVotes)}% ,{count} votes)</span>}
                            </Button >
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authUser: authedUser, polls, users }, { match }) {
    const { id } = match.params;
    const poll = polls[id];

    if (!poll) {
        return {
            poll: null
        }
    }

    const vote = getVoteKeys().reduce((vote, key, index) => {
        if (vote !== null) return vote[0];
        if (index === getVoteKeys().length-1 &&  poll[key].includes(authedUser)) return key[0];
        return poll[key].includes(authedUser) ? key : vote
    }, null);

    return {
        poll,
        vote,
        authedUser,
        authorAvatar: users[poll.author].avatarURL
    }
}

export default connect(mapStateToProps)(Poll)