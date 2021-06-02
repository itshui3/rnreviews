import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { globalStyles } from '../styles/global';

interface Props {
    navigation: any,
    route: any
}

export default function Details({ navigation, route }: Props) {

    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{ title }</Text>
            <Text style={globalStyles.paragraph}>{ body }</Text>
            <Text style={globalStyles.paragraph}>Rating: { rating }</Text>
        </View>
    )
}

/*
navigation: 
clicking back btn should navigate me back to Home screen
*/