import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { globalStyles } from '../styles/global';

import { mockReviews } from './mockReviews';

type Props = {
  navigation: any;
};

export default function Home({ navigation }: Props) {

    const [reviews, setReviews] = useState(mockReviews);

    const navigateDetails = () => {
      navigation.navigate('Details');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to review dets' onPress={navigateDetails} />
        </View>
    )
}

/*
navigation: 
if I click a review, it should lead me to details page of that review
*/