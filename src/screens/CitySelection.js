import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import DropDown from '../components/Global/Form/DropDown';
import DynamicButton from '../components/Global/Form/DynamicButton';
import { citiesData } from '../utils/data/helpers';

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
                <Text className="text-primary uppercase  font-medium text-4xl text-center">Select Your City</Text>
                <View className="my-5">
                    <DropDown
                        placeholder='Select Your City'
                        value={value}
                        setValue={setValue}
                        values={citiesData}
                        dropdownStyle="p-5 py-6 m-2 rounded-lg border border-gray-300"
                    />
                </View>
                <Text className="text-center text-4xl text-neutral-600 font-extralight mb-10">Select Your City to{"\n"}Get Started</Text>
            </View>

            <DynamicButton
                btnText="Select & Proceed"
                navigation={navigation}
                navigatingText="Login"
                wrapperClass="mb-5"
            />
        </View>
    );
};

export default CitySelection;
