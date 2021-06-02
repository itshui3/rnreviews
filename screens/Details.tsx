import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { globalStyles } from '../styles/global';

interface Props {
    navigation: any
}

export default function Details({ navigation }: Props) {

    const back = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Details Screen</Text>
            <Button title='back to home screen' onPress={back} />
        </View>
    )
}

/*
navigation: 
clicking back btn should navigate me back to Home screen
*/