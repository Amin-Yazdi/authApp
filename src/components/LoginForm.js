import React, { Component } from 'react';
//import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    /*eslint-disable */
    state = { email: '', password: '' }; 
    /*eslint-enable */
    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label='Email:'
                        placeHolder='yourEmail@domail.com'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        value={this.state.password}
                        label='Password:' 
                        placeHolder='Password'
                        onChangeText={password => this.setState({ password })}

                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Submit
                    </Button>
                </CardSection>
            </Card>
         );
    }
}

export default LoginForm;
