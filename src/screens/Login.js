import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDown from '../components/Global/DropDown';
import * as Icon from 'react-native-feather'
import DynamicButton from '../components/Global/DynamicButton';
const data = [
    { label: '+93', value: '+93' },
    { label: '+355', value: '+355' },
    { label: '+213', value: '+213' },
    { label: '+61', value: '+61' },
    { label: '+91', value: '+91' },
    { label: '+32', value: '+32' },
    { label: '+55', value: '+55' },
    { label: '+226', value: '+226' },
];
const Login = ({ navigation }) => {
    const [value, setValue] = useState('+91');
    return (
        <View className="w-full p-6 h-screen flex flex-col justify-between">
            <View>
                <Text className="text-primary uppercase mt-10 heading font-bold text-4xl ">SIGN IN</Text>
                <Text>Enter your mobile to get OTP</Text>
                <View className="flex-row items-center space-x-2 pb-2 my-10">
                    <View className="flex-row flex-1 items-center p-3 rounded-lg border border-gray-300">
                        <DropDown
                            value={value}
                            setValue={setValue}
                            values={data}
                            dropdownStyle="w-20 border-none"
                            isIcon="hidden"
                        />
                        <TextInput placeholder='Enter Phone Number' className="" />
                    </View>
                </View>
            </View>
            <DynamicButton
                btnText="Get OTP"
                navigation={navigation}
                navigatingText="Otp"
                isHelp={true}
            />
        </View>
    );
};

export default Login;
