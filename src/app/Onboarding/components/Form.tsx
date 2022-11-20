import React, { Component } from 'react';
import { GetStarted } from './GetStarted';
import SocialProfiles from './CreatePassword';
import Confirm from './Confirm';
import Success from './Success';
import { Interests } from './Interests';

export class Form extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        password: '',
        facebook: '',
        twitter: '',
        github: '',
        confpassword: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
        console.log(this.state);
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, password, facebook, twitter, github,confpassword } = this.state;
        const values = { name, email, phone, password, facebook, twitter, github,confpassword };

        switch (step) {
            case 1:
                return (
                    <GetStarted
                        nextStep={this.nextStep}
                    />
                );
            case 2:
                return (
                    <Interests
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <SocialProfiles
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                />
                );  
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Success />
                );
        }
    }
}

export default Form