import { View, Text } from 'react-native'
import React from 'react'
import DynamicButton from '../../../components/Global/Form/DynamicButton'

export default function Address({ navigation }) {
    return (
        <View className="flex flex-col justify-between content-between  p-6  h-screen w-full">
            <Text className="text-2xl text-center mt-20">Current Address</Text>
            <DynamicButton
                btnText="Next"
                navigation={navigation}
                navigatingText="kyc"
            />
        </View>
    )
}