import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddPoll extends Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: ''
    }

    handleInputChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    isDisabled = () => {
        const { question, a, b, c, d } = this.state;

        return question == '' || a == '' || b == '' || c == '' || d == ''
    }

    render() {
        return (
            <div>
                <Form style={{ marginTop: '2em' }}>
                    <FormGroup>
                        <Label for="question"><h2>What's your Question ?</h2></Label>
                        <Input type="text" onChange={this.handleInputChange} value={this.state.question} name="question" id="question" placeholder="Type your question" />
                    </FormGroup>
                    <h2>What are the options ?</h2>
                    <FormGroup>
                        <Label for="a">A</Label>
                        <Input onChange={this.handleInputChange} value={this.state.a} type="text" name="a" id="a" placeholder="Type option a" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="b">B</Label>
                        <Input onChange={this.handleInputChange} value={this.state.b} type="text" name="b" id="b" placeholder="Type option b" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="c">C</Label>
                        <Input onChange={this.handleInputChange} value={this.state.c} type="text" name="c" id="c" placeholder="Type option c" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="d">D</Label>
                        <Input onChange={this.handleInputChange} value={this.state.d} type="text" name="d" id="d" placeholder="Type option d" />
                    </FormGroup>
                    <Button type='button' disabled={this.isDisabled()} outline>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AddPoll;