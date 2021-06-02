import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { globalStyles } from '../styles/global';

import { mockReviews, ReviewItem } from './mockReviews';

type Props = {
  navigation: any;
};


export default function Home({ navigation }: Props) {

    const [reviews, setReviews] = useState(mockReviews);

    const navigateDetails = (item: ReviewItem) => {
      navigation.navigate('Details', {
        title: item.title,
        rating: item.rating,
        body: item.body,
        key: item.key
      });
    }

    return (
        <View style={globalStyles.container}>

            <FlatList
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity
                key={item.key}
                onPress={() => navigateDetails(item)}>
                  <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
              )
            }
            />

        </View>
    )
}

/*
navigation: 
if I click a review, it should lead me to details page of that review
*/