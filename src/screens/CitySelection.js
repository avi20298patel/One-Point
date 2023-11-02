import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import DropDown from '../components/Global/DropDown';
import SubmitButton from '../components/Global/Button';


const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const CitySelection = ({ navigation }) => {
    const [value, setValue] = useState('');
    return (
        <View className="flex flex-col px-6 w-full h-screen">
            <View className="mt-20 text-center">
                <Image
                    className="mx-auto"
                    source={require('../assets/images/marker.png')}
                />
            </View>
            <View className="mt-20">
                <Text className="text-primary uppercase font-medium text-4xl text-center">Select Your City</Text>
                <View className="my-5">
                    <DropDown
                        value={value}
                        setValue={setValue}
                        values={data}
                    />
                </View>
                <Text className="text-center text-4xl text-neutral-600 font-extralight mb-10">Select Your City to{"\n"}Get Started</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    className="bg-primary p-2 rounded-lg w-full hover:shadow-2xl hover:shadow-red-700 mx-auto"
                >
                    <Text className="text-2xl text-center text-white">Select & Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CitySelection;
