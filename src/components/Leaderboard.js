import React from 'react'
import { connect } from 'react-redux'
import { Media, Badge } from 'reactstrap'

function Leaderboard({ users }) {
    return (
        <Media list>
            <h2>LEADERBOARD</h2>
            {users.map((user) => (
                <Media key={user.id} style={{marginTop:'2em'}}>
                    <Media left href="#" style={{marginRight:'2em'}}>
                        <Media object style={{height:'150px'}} className="img-thumbnail" src={user.avatarURL} alt={`Avatar for ${user.name}`} />
                    </Media>
                    <Media body>
                        <Media heading>
                            {user.name}
                        </Media>
                        <p>Polls <Badge color="primary" pill>{user.polls}</Badge></p>
                        <p>Answers  <Badge color="primary" pill>{user.answers}</Badge></p>
                    </Media>
                </Media>
            ))}
        </Media>
    )
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users)
            .map(id => {
                const { name, avatarURL, answers, polls } = users[id];

                return {
                    id,
                    name,
                    avatarURL,
                    polls: polls.length,
                    answers: answers.length
                }
            })
            .sort((a, b) => b.polls + b.answers > a.polls + a.answers)

    }
}

export default connect(mapStateToProps)(Leaderboard)