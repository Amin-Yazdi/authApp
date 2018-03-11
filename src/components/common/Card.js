import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
        <View style={styles.viewContainer}>
            {props.children}
        </View>    
    );

const styles = {
    viewContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginTop: 10,
        marginRight: 5,
        backgroundColor: '#f8f8f8'
    }


};

export { Card };
