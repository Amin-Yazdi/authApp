import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
     /*eslint-disable */
    state = { loggedIn: null }; 
     /*eslint-enable */   
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCqAEmG7pjbx__pdoSF1ZIqIA8Q9d19ed0',
            authDomain: 'auth-4ad6c.firebaseapp.com',
            databaseURL: 'https://auth-4ad6c.firebaseio.com',
            projectId: 'auth-4ad6c',
            storageBucket: 'auth-4ad6c.appspot.com',
            messagingSenderId: '465882839807'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button
                    onPress={() => {
                    firebase.auth().signOut();    
                }}
                >Log Out</Button>);
            case false:
                 return <LoginForm />;
            default: 
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Welcome'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
