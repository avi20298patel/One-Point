import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDown from '../components/Global/Form/DropDown';
import * as Icon from 'react-native-feather'
import DynamicButton from '../components/Global/Form/DynamicButton';
import { countryCodes } from '../utils/data/helpers';
import InputField from '../components/Global/Form/InputField'

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
                            values={countryCodes}
                            dropdownStyle="w-20 border-none"
                            isIcon="hidden"
                        />
                        <InputField containerClass={false} placeholder='Enter Phone Number' className="text-lg text-primary" keyboardType="numeric" />
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
