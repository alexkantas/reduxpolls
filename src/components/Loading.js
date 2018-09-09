import React, { Component } from 'react'
import { Progress } from 'reactstrap'

class Loading extends Component {

    state = { value: 30 };

    componentDidMount() {
        const increaseValue = setInterval(() => {
            console.log(this.state.value);
            this.setState(ps=>this.setState({value:ps.value+10}))
            if (this.state.value > 89) clearInterval(increaseValue);
        }, 100)
    }

    render() {
        return (
            <div style={{ margin: "10em", padding: "5em" }}>
                <h3>Please Wait ...</h3>
                <Progress striped color="success" value={this.state.value} />
            </div>
        )
    }
}

export default Loading;