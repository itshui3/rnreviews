import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '../styles/global';

const mockReviews: { 
    title: string, 
    rating: number, 
    body: string, 
    key: string 
}[] = [
    {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    {title: 'Gotta Catch Them All(again)', rating: 4, body: 'lorem ipsum', key: '2' },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
];

export default function Home() {

    const [reviews, setReviews] = useState(mockReviews);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    )
}

/*
navigation: 
if I click a review, it should lead me to details page of that review
*/