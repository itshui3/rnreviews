import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Details() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Details Screen</Text>
        </View>
    )
}

/*
navigation: 
clicking back btn should navigate me back to Home screen
*/