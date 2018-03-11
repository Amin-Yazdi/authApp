import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCqAEmG7pjbx__pdoSF1ZIqIA8Q9d19ed0',
            authDomain: 'auth-4ad6c.firebaseapp.com',
            databaseURL: 'https://auth-4ad6c.firebaseio.com',
            projectId: 'auth-4ad6c',
            storageBucket: 'auth-4ad6c.appspot.com',
            messagingSenderId: '465882839807'
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'TEXT'} />
                <LoginForm />
            </View>
        );
    }
}

export default App;
