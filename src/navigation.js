import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import IntroDuction from './screens/IntroDuction'
import Login from './screens/Login';
import Otp from './screens/Otp';
import CitySelection from './screens/CitySelection';
import WelcomeProfile from './screens/WelcomeProfile';
import BasicInfo from './screens/Information/BasicInfo';
import ServicesList from './screens/Information/Services/ServicesList';
import SubServices from './screens/Information/Services/SubServices';
import ServiceCart from './screens/Information/Services/ServiceCart';
import Address from './screens/Information/Address/Address';
import Kyc from './screens/Information/KYC/Kyc';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={IntroDuction} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="city-select" component={CitySelection} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="welcome-screen" component={WelcomeProfile} />
                <Stack.Screen name="basic-info" component={BasicInfo} options={{ headerTitle: 'Basic Information', headerShown: true, headerBackVisible: false, headerTransparent: true, headerTitleAlign: 'center' }} />
                <Stack.Screen name="service-list" component={ServicesList} options={{ headerTitle: 'Select Your Services', headerShown: true, headerBackVisible: true, headerTransparent: true, headerTitleAlign: 'center' }} />
                <Stack.Screen name="sub-service" component={SubServices} options={{ headerTitle: 'Add Your Service', headerShown: true, headerBackVisible: true, headerTransparent: true, headerTitleAlign: 'center' }} />
                <Stack.Screen name="service-cart" component={ServiceCart} options={{ headerTitle: 'Selected Service', headerShown: true, headerBackVisible: true, headerTransparent: true, headerTitleAlign: 'center' }} />
                <Stack.Screen name="address" component={Address} options={{ headerTitle: 'Add Your Address', headerShown: true, headerBackVisible: true, headerTransparent: true, headerTitleAlign: 'center' }} />
                <Stack.Screen name="kyc" component={Kyc} options={{ headerTitle: 'KYC Information', headerShown: true, headerBackVisible: true, headerTransparent: true, headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}