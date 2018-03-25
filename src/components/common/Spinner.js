import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
    <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size={size || 'large'} />
    </View>
    );

const styles = {
    activityIndicatorContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
 };


export { Spinner };
