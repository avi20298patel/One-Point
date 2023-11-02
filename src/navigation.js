import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import IntroDuction from './screens/IntroDuction'
import Login from './screens/Login';
import Otp from './screens/Otp';
import CitySelection from './screens/CitySelection';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={IntroDuction} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="city-select" component={CitySelection} />
                <Stack.Screen name="Otp" component={Otp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}