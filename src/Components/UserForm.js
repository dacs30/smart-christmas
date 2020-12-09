import React, { Component } from 'react'
import GetStarted from './GetStarted'
import UserNameForm from './UserNameForm'
import UserEmail from './UserEmail'
import NumberOfPlayers from './NumberOfPlayers'
import Themes from './Themes'
import QuestionPrompt from './QuestionPrompt'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import Confirmation from './Confirmation'

export class UserForm extends Component {
    state = {
        step: 0,
        name: '',
        email: '',
        numberOfPlayers: 2,
        theme: '',
        firstQuestion: 1,
        secondQuestion: 1,
        thirdQuestion: '',
    }

    // Proceed to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Go back to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Jumpt to the given step
    jumpTo = (givenStep) => {
        this.setState({
            step: givenStep
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { name, email, numberOfPlayers, theme, firstQuestion, secondQuestion, thirdQuestion } = this.state
        const values = { name, email, numberOfPlayers, theme, firstQuestion, secondQuestion, thirdQuestion }
        
        switch(step) {
            case 0:
                return (
                    <GetStarted
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 1:
                return (
                    <UserNameForm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <UserEmail
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <NumberOfPlayers 
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Themes
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} 
                    />
                )
            case 5:
                return (
                    <QuestionPrompt
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        jumpTo={this.jumpTo}
                        values={values}
                    />
                )
            case 6:
                return (
                    <FirstQuestion
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 7:
                return (
                    <SecondQuestion
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 8:
                return (
                    <ThirdQuestion
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 9:
                return (
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

export default UserForm
