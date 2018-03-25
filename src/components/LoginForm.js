import React, { Component } from 'react';
import Firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    /*eslint-disable */
    state = { email: '', password: '', error:'', waitForlogin:false }; 
    /*eslint-enable */

    //Nested function to login and catch errors.
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', waitForlogin: true });
        Firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            Firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
              this.setState({ error: 'Failed Attempt', waitForlogin: false });
              this.renderButton();
            });
        });
    }

    renderButton() {
        if (this.state.waitForlogin) {
            return (
               <Spinner size='small' />
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Submit
            </Button>
        );
    }

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
                <Text style={styles.loginErrorMessage}>
                    {this.state.error}
                </Text>
                <CardSection>
                        {this.renderButton()}
                </CardSection>
            </Card>
         );
    }
}

const styles = {
    loginErrorMessage: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    }
};

export default LoginForm;
