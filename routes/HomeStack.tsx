import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

export default function HomeStack(): JSX.Element {

    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" component={Home} 
            options={{ 
                title: 'List of Reviews'
            }}
            />
            <Stack.Screen 
            name="Details" component={Details} 
            options={({ route }) => ({ 
                title: `${(route.params as any).key}: ${(route.params as any).title}`
            })}
            />
        </ Stack.Navigator>
    )
}